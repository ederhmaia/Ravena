interface ICurrency {
  name: string
  symbol: string
  asset: any
}

type CurrencyMap = { [key: string]: ICurrency }

const CurrencyMap: CurrencyMap = {
  bitcoin: {
    name: 'Bitcoin',
    symbol: 'BTC',
    asset: require('../Assets/Image/bitcoin.png'),
  },
  ethereum: {
    name: 'Ethereum',
    symbol: 'ETH',
    asset: require('../Assets/Image/ethereum.png'),
  },
  ripple: {
    name: 'Ripple',
    symbol: 'XRP',
    asset: require('../Assets/Image/ripple.png'),
  },
  litecoin: {
    name: 'Litecoin',
    symbol: 'LTC',
    asset: require('../Assets/Image/litecoin.png'),
  },
  'bitcoin-cash': {
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    asset: require('../Assets/Image/bitcoin-cash.png'),
  },
  cardano: {
    name: 'Cardano',
    symbol: 'ADA',
    asset: require('../Assets/Image/cardano.png'),
  },
  stellar: {
    name: 'Stellar',
    symbol: 'XLM',
    asset: require('../Assets/Image/stellar.png'),
  },
  tether: {
    name: 'Tether',
    symbol: 'USDT',
    asset: require('../Assets/Image/tether.png'),
  },

  monero: {
    name: 'Monero',
    symbol: 'XMR',
    asset: require('../Assets/Image/monero.png'),
  },
}

export default CurrencyMap
