import type { Web3Provider } from '@ethersproject/providers'
import { getPriorityConnector } from '@web3-react/core'

import metaMask from './metaMask'
import walletConnect from './walletConnect'

export type { Web3Connector } from './utils'

export const connectors = [metaMask, walletConnect]

export function useActiveConnector() {
  return getPriorityConnector(...connectors)
}

export function useActiveProvider(): Web3Provider | undefined {
  return useActiveConnector().usePriorityProvider()
}
