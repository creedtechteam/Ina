import { useEffect, useMemo, useState } from 'react'
import WalletConnect from '../../../Components/WalletConnect'
import { mintJournal, tokensOf, getEntry, bytesToHex } from '../../../polkadot/contract'
import { STORAGE_KEYS } from '../../../polkadot/config'
import { uploadJSON } from '../../../ipfs/web3Storage'
import { signHash } from '../../../polkadot/sign'
import { setProofCid } from '../../../polkadot/contract'

export default function Mint() {
  const [entries, setEntries] = useState([])
  const [address, setAddress] = useState(localStorage.getItem('polkadotAddress') || '')
  const [contractAddress, setContractAddress] = useState(localStorage.getItem(STORAGE_KEYS.contractAddress) || '')
  const [metadataUrl, setMetadataUrl] = useState(localStorage.getItem(STORAGE_KEYS.metadataUrl) || '')
  const [mintingId, setMintingId] = useState(null)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ina_local_entries') || '[]')
    setEntries(data)
  }, [])

  const [chainEntries, setChainEntries] = useState([])
  const refreshOnChain = async () => {
    if (!address) return
    try {
      const ids = await tokensOf(address)
      const rows = []
      for (const id of ids) {
        const e = await getEntry(id, address)
        rows.push({ id, ...e })
      }
      setChainEntries(rows)
    } catch (e) { /* ignore for now */ }
  }

  useEffect(() => { refreshOnChain() }, [address])

  const canMint = useMemo(() => !!address && !!contractAddress, [address, contractAddress])

  const saveSettings = () => {
    if (contractAddress) localStorage.setItem(STORAGE_KEYS.contractAddress, contractAddress)
    if (metadataUrl) localStorage.setItem(STORAGE_KEYS.metadataUrl, metadataUrl)
    setMsg('Settings saved')
    setTimeout(() => setMsg(''), 1500)
  }

  const doMint = async (idx) => {
    const e = entries[idx]
    setMintingId(idx)
    setMsg('Submitting transaction… Please approve in your wallet')
    try {
      await mintJournal({ address, cid: e.cid, hashHex: e.hashHex, tags: e.tags || [] })
      setMsg('Minted successfully!')
    } catch (err) {
      setMsg(err.message || 'Mint failed')
    } finally {
      setMintingId(null)
    }
  }

  const attachProof = async (id, onChainHashBytes) => {
    if (!address) return setMsg('Connect wallet first')
    const onChainHex = bytesToHex(onChainHashBytes || [])
    const local = entries.find(e => e.hashHex.toLowerCase().replace(/^0x?/, '0x') === onChainHex.toLowerCase())
    if (!local) return setMsg('Matching local entry not found for this token')
    setMsg('Generating proof… approve signature in wallet')
    try {
      const sig = await signHash(address, onChainHex)
      const proof = { type: 'ina:proof:v1', address, hashHex: onChainHex, signature: sig, createdAt: new Date().toISOString() }
      const cid = await uploadJSON(proof)
      await setProofCid({ address, id, proofCid: cid })
      setMsg('Proof attached on-chain')
    } catch (e) {
      setMsg(e.message || 'Failed to attach proof')
    }
  }

  return (
    <div className="min-h-screen bg-pink-100 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl font-semibold mb-3 text-gray-800">Mint Encrypted Journals</h1>
        <div className="mb-4"><WalletConnect /></div>

        <div className="bg-white rounded p-4 mb-6 shadow">
          <h2 className="font-semibold mb-2">Contract Settings</h2>
          <div className="flex flex-col gap-2">
            <input className="border p-2 rounded" placeholder="Contract address on Shibuya" value={contractAddress} onChange={e => setContractAddress(e.target.value)} />
            <input className="border p-2 rounded" placeholder="Metadata URL (optional)" value={metadataUrl} onChange={e => setMetadataUrl(e.target.value)} />
            <button className="bg-pink-400 text-white px-4 py-2 rounded w-fit" onClick={saveSettings}>Save</button>
            {msg && <span className="text-sm text-gray-600">{msg}</span>}
          </div>
        </div>

        <div className="flex justify-between items-end mb-2">
          <h2 className="font-semibold text-gray-700">Local Entries</h2>
          <a className="text-pink-600 text-sm underline" href="#/mint" onClick={e => { e.preventDefault(); setEntries(JSON.parse(localStorage.getItem('ina_local_entries') || '[]')) }}>Refresh</a>
        </div>
        {entries.length === 0 && <div className="text-gray-600">No entries saved yet.</div>}
        <div className="grid gap-3 mb-8">
          {entries.map((e, idx) => (
            <div key={idx} className="bg-white rounded shadow p-3">
              <div className="text-sm text-gray-600">CID: {e.cid}</div>
              <div className="text-sm text-gray-600">Hash: {e.hashHex.slice(0, 16)}…</div>
              <div className="text-sm text-gray-600">Created: {new Date(e.createdAt).toLocaleString()}</div>
              <button
                className="mt-2 bg-pink-400 text-white px-4 py-2 rounded disabled:opacity-60"
                disabled={!canMint || mintingId === idx}
                onClick={() => doMint(idx)}
              >
                {mintingId === idx ? 'Minting…' : 'Mint on Shibuya'}
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-end mb-2">
          <h2 className="font-semibold text-gray-700">On-chain Entries</h2>
          <button className="text-pink-600 text-sm underline" onClick={refreshOnChain}>Refresh</button>
        </div>
        <div className="grid gap-3">
          {chainEntries.map((e, idx) => (
            <div key={idx} className="bg-white rounded shadow p-3">
              <div className="text-sm text-gray-600">ID: {e.id}</div>
              <div className="text-sm text-gray-600">CID: {e.cid}</div>
              <div className="text-sm text-gray-600">Tags: {(e.tags || []).join(', ')}</div>
              <div className="text-sm text-gray-600">Proof CID: {e.proof_cid || '—'}</div>
              <button className="mt-2 bg-white border border-pink-400 text-pink-600 px-3 py-1 rounded" onClick={() => attachProof(e.id, e.hash)}>Attach proof</button>
            </div>
          ))}
          {chainEntries.length === 0 && (
            <div className="text-gray-600">No on-chain entries yet.</div>
          )}
        </div>
      </div>
    </div>
  )
}
