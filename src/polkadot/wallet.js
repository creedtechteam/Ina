import { web3Enable, web3Accounts, web3FromAddress } from '@polkadot/extension-dapp'

export async function connectWallet(appName = 'INA') {
  const extensions = await web3Enable(appName)
  if (!extensions || extensions.length === 0) throw new Error('Polkadot extension not found')
  const accounts = await web3Accounts()
  if (!accounts || accounts.length === 0) throw new Error('No accounts in extension')
  const account = accounts[0]
  const injector = await web3FromAddress(account.address)
  return { account, injector }
}

export function shortAddress(addr) {
  return addr ? `${addr.slice(0, 6)}…${addr.slice(-4)}` : ''
}
