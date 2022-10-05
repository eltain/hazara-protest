import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { events } from '../data/event'
import moment from 'moment-mini'
const DATE_FORMAT = 'DD'
function Layout({ title = "Stop Hazara Genocide | Protest Map", description = "Stop Hazara Genocide | Protest Map", children }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                To add your protest location, &nbsp; <a target="_blank" href="https://docs.google.com/forms/d/1n-53iQJLTQjCOcRdhl_2G1E_KNQ9X5rNt57jFsD9_2g/viewform?edit_requested=true"> Please fill the form here</a>
                {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
            </footer>
        </div>
    )
}

export default Layout