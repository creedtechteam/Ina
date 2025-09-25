import { useState } from 'react'
import { connectWallet, shortAddress } from '../polkadot/wallet'

export default function WalletConnect() {
  const [address, setAddress] = useState(localStorage.getItem('polkadotAddress') || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onConnect = async () => {
    setLoading(true)
    setError('')
    try {
      const { account } = await connectWallet('INA')
      setAddress(account.address)
      localStorage.setItem('polkadotAddress', account.address)
    } catch (e) {
      setError(e.message || 'Failed to connect wallet')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onConnect}
        disabled={loading}
        className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-md transition disabled:opacity-60"
      >
        {address ? `Connected: ${shortAddress(address)}` : loading ? 'Connecting…' : 'Connect Polkadot Wallet'}
      </button>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
