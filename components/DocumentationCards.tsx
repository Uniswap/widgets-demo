import styles from '../styles/Cards.module.css'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { BsBook, BsInfoCircle } from 'react-icons/bs'

export default function DocumentationCards() {
  return (
    <div className={styles.grid}>
      <a href="https://docs.uniswap.org/" className={styles.card}>
        <div className={styles.row}>
          <BsBook />↗
        </div>
        <h3>What is Uniswap</h3>
        <p>Learn about the Uniswap Protocol and available SDKs.</p>
      </a>

      <a href="https://docs.uniswap.org/sdk/widgets/swap-widget" className={styles.card}>
        <div className={styles.row}>
          <BsInfoCircle />↗
        </div>
        <h3>Swap Widget Docs</h3>
        <p>Explore the Swap Widget&apos;s features and API.</p>
      </a>

      <a href="https://discord.gg/ybKVQUWb4s" className={styles.card + ' ' + styles.external}>
        <div className={styles.row}>
          <FaDiscord className={styles.logo} fill="#8c9eff" />
          <div className={styles.column}>
            <h3>Discord</h3>
            <p>Hop into #widgets for realtime help.</p>
          </div>
        </div>
      </a>

      <a
        href="https://github.com/Uniswap/interface/blob/main/src/lib/index.tsx"
        className={styles.card + ' ' + styles.external}
      >
        <div className={styles.row}>
          <FaGithub className={styles.logo} />
          <div className={styles.column}>
            <h3>GitHub</h3>
            <p>View the Swap Widget&apos;s source.</p>
          </div>
        </div>
      </a>
    </div>
  )
}
