import Footer from './Components/Footer'
import Header from './Components/Header'
import Pages from './Pages/Pages'
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {isHome && <Header />}
      <main className={isHome ? 'mt-10' : ''}>
        <Pages />
      </main>
      {isHome && <Footer />}
    </>
  );
}

export default App;
