import type { Web3Provider } from '@ethersproject/providers'
import { getPriorityConnector } from '@web3-react/core'
import { Connector } from '@web3-react/types'

import metaMask, { isMetaMask } from './metaMask'
import walletConnect, { isWalletConnect } from './walletConnect'

export type { Web3Connector } from './utils'

export function getConnectorName(connector: Connector): string {
  if (isMetaMask(connector)) {
    return 'MetaMask'
  } else if (isWalletConnect(connector)) {
    return 'WalletConnect'
  } else {
    throw new Error('Unknown Connector')
  }
}

export const connectors = [metaMask, walletConnect]

export function useActiveProvider(): Web3Provider | undefined {
  return getPriorityConnector(...connectors).usePriorityProvider() as Web3Provider
}
