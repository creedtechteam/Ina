const API_ENDPOINT = 'https://api.web3.storage/upload'

export function getWeb3Token() {
  const envToken = import.meta.env.VITE_WEB3STORAGE_TOKEN
  const ls = typeof window !== 'undefined' ? localStorage.getItem('w3s_token') : null
  return ls || envToken || ''
}

export function setWeb3Token(token) {
  if (typeof window !== 'undefined') localStorage.setItem('w3s_token', token)
}

export async function uploadJSON(obj, token) {
  const auth = token || getWeb3Token()
  if (!auth) throw new Error('Missing Web3.Storage API token')
  const res = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  if (!res.ok) throw new Error(`IPFS upload failed: ${res.status}`)
  const data = await res.json()
  // API returns { cid: "bafy..." }
  return data.cid || data['cid']
}
