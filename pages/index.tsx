import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SwapWidget } from '@uniswap/widgets'

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑

import DocumentationCards from '../components/DocumentationCards'
import Web3Connectors from '../components/Web3Connectors'
import { useActiveProvider } from '../connectors'
import { useCallback, useRef } from 'react'
import { JSON_RPC_URL } from '../constants'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

const Home: NextPage = () => {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  return (
    <div className={styles.container}>
      <Head>
        <title>Uniswap Widgets</title>
        <meta name="description" content="Uniswap Widgets" />
        <link rel="icon" href="https://app.uniswap.org/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Uniswap Swap Widget</h1>

        <div className={styles.demo}>
          <div className={styles.connectors} ref={connectors} tabIndex={-1}>
            <Web3Connectors />
          </div>

          <div className={styles.widget}>
            <SwapWidget
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              locale="en-US"
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="1"
              defaultOutputTokenAddress={UNI}
            />
          </div>
        </div>

        <hr className={styles.rule} />

        <DocumentationCards />
      </main>
    </div>
  )
}

export default Home
