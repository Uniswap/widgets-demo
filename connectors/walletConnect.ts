import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect'
import { JSON_RPC_URL } from '../constants'
import { toWeb3Connector } from './utils'

const connector = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect(
      actions,
      {
        rpc: { 1: JSON_RPC_URL },
      },
      false
    )
)
export default toWeb3Connector(connector)
