import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Connector } from '@web3-react/types'
import { toWeb3Connector } from './utils'

export function isMetaMask(connector: Connector) {
  return connector instanceof MetaMask
}

const connector = initializeConnector<MetaMask>((actions) => new MetaMask(actions, false))
export default toWeb3Connector(connector)
