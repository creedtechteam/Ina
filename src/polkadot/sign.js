import { web3FromAddress } from '@polkadot/extension-dapp'

export async function signHash(address, hashHex) {
  const injector = await web3FromAddress(address)
  const signer = injector?.signer
  if (!signer?.signRaw) throw new Error('Extension does not support signRaw')
  const res = await signer.signRaw({ address, data: hashHex.startsWith('0x') ? hashHex : '0x' + hashHex, type: 'bytes' })
  return res.signature
}
