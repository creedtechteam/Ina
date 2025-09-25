import { ApiPromise, WsProvider } from '@polkadot/api'
import { ContractPromise } from '@polkadot/api-contract'
import { web3FromAddress } from '@polkadot/extension-dapp'
import { DEFAULT_RPC, DEFAULT_CONTRACT_METADATA_URL, STORAGE_KEYS } from './config'

let api

export async function getApi(rpc = DEFAULT_RPC) {
  if (api) return api
  const provider = new WsProvider(rpc)
  api = await ApiPromise.create({ provider })
  return api
}

export async function loadMetadata(url) {
  const metaUrl = url || localStorage.getItem(STORAGE_KEYS.metadataUrl) || DEFAULT_CONTRACT_METADATA_URL
  const res = await fetch(metaUrl)
  if (!res.ok) throw new Error(`Failed to load contract metadata: ${res.status}`)
  return await res.json()
}

export async function getContract(address, metadata) {
  const api = await getApi()
  const addr = address || localStorage.getItem(STORAGE_KEYS.contractAddress)
  if (!addr) throw new Error('Missing contract address. Set it in Settings.')
  const meta = metadata || await loadMetadata()
  return new ContractPromise(api, meta, addr)
}

export function hexToBytes(hex) {
  const clean = hex.startsWith('0x') ? hex.slice(2) : hex
  const arr = new Uint8Array(clean.length / 2)
  for (let i = 0; i < arr.length; i++) arr[i] = parseInt(clean.substr(i * 2, 2), 16)
  return arr
}

export function bytesToHex(bytes) {
  return '0x' + Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')
}

export function ensureBytes32FromHex(hex) {
  const b = hexToBytes(hex)
  if (b.length !== 32) throw new Error('hash must be 32 bytes')
  return b
}

export async function mintJournal({ address, cid, hashHex, tags = [] }) {
  const contract = await getContract()
  const api = await getApi()
  const injector = await web3FromAddress(address)
  const gasLimit = api.registry.createType('WeightV2', {
    refTime: 2400000000,
    proofSize: 131072
  })

  const hashBytes = ensureBytes32FromHex(hashHex)

  return new Promise(async (resolve, reject) => {
    try {
      const tx = contract.tx['mint_journal']({ gasLimit, storageDepositLimit: null }, cid, Array.from(hashBytes), tags)
      const unsub = await tx.signAndSend(address, { signer: injector.signer }, (result) => {
        if (result.status.isInBlock || result.status.isFinalized) {
          unsub()
          resolve(result)
        }
      })
    } catch (e) { reject(e) }
  })
}

export async function tokensOf(address) {
  const contract = await getContract()
  const { output } = await contract.query['tokens_of'](address, { gasLimit: -1 }, address)
  return output?.toJSON() || []
}

export async function getEntry(id, address) {
  const contract = await getContract()
  const { output } = await contract.query['get_entry'](address, { gasLimit: -1 }, id)
  return output?.toJSON() || null
}

export async function setProofCid({ address, id, proofCid }) {
  const contract = await getContract()
  const api = await getApi()
  const injector = await web3FromAddress(address)
  const gasLimit = api.registry.createType('WeightV2', {
    refTime: 2400000000,
    proofSize: 131072
  })
  return new Promise(async (resolve, reject) => {
    try {
      const tx = contract.tx['set_proof_cid']({ gasLimit, storageDepositLimit: null }, id, proofCid)
      const unsub = await tx.signAndSend(address, { signer: injector.signer }, (result) => {
        if (result.status.isInBlock || result.status.isFinalized) {
          unsub()
          resolve(result)
        }
      })
    } catch (e) { reject(e) }
  })
}
