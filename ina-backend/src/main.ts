import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';
import { ResponseTransformerInterceptor } from './common/response.interceptor';
import { HttpExceptionFilter } from './common/filter';
import { AuditLoggerMiddleware } from './common/auditLogger.middleware';
import { CleanRequestMiddleware } from './common/cleanRequest.middleware';
import { ENVIRONMENT } from './common/environment';

const serverPort = ENVIRONMENT.APP.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:8081', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      // credentials: true,
    },
  });

  app.use(helmet());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  /**
   * interceptors
   */
  app.useGlobalInterceptors(
    new ResponseTransformerInterceptor(app.get(Reflector)),
    // new CacheInterceptor(app.get(Reflector)), // enable when need cache
  );

  /**
   * Set global exception filter
   */
  app.useGlobalFilters(new HttpExceptionFilter());

  /**
   * Set global prefix for routes
   */
  app.setGlobalPrefix('/api/v1');

  /**
   *  Set global pipes
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Middlewares
  app.use(new CleanRequestMiddleware().use);
  app.use(new AuditLoggerMiddleware().use);

  await app.listen(serverPort);
}
bootstrap().then(() =>
  console.log(
    `======= SERVER STARTED SUCCESSFULLY ON PORT : ${serverPort} ========`,
  ),
);
