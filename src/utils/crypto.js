import sodium from 'libsodium-wrappers'

export async function sha256Hex(text) {
  const enc = new TextEncoder()
  const data = enc.encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function encryptTextXChaCha(text) {
  await sodium.ready
  const key = sodium.crypto_aead_xchacha20poly1305_ietf_keygen()
  const nonce = sodium.randombytes_buf(sodium.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES)
  const message = sodium.from_string(text)
  const cipher = sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(
    message,
    null,
    null,
    nonce,
    key
  )
  return {
    keyB64: sodium.to_base64(key, sodium.base64_variants.ORIGINAL),
    nonceB64: sodium.to_base64(nonce, sodium.base64_variants.ORIGINAL),
    cipherB64: sodium.to_base64(cipher, sodium.base64_variants.ORIGINAL),
    algo: 'xchacha20poly1305-ietf',
    version: 1
  }
}
