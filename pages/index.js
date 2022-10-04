import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import events from '../data/event'
import moment from 'moment-mini'
const DATE_FORMAT = 'DD'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Stop Hazara Genocide | Protest Map</title>
        <meta name="description" content="Stop Hazara Genocide | Protest Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          #StopHazaraGenocide Protest Map
        </h1>

        <p className={styles.description}>
          To add your protest location, <a href="https://docs.google.com/forms/d/1n-53iQJLTQjCOcRdhl_2G1E_KNQ9X5rNt57jFsD9_2g/viewform?edit_requested=true"> Please fill the form here</a>
        </p>

        <div className={styles.grid}>
          {events.map(event =>
            <a key={event.id} href="https://nextjs.org/docs" className={styles.card}>
              <iframe
                width="250"
                height="150"
                style={{border:0}}
                loading="lazy"
                src={"https://www.google.com/maps/embed/v1/search?key=AIzaSyClz09WvWSNKUFI-lwPmNO3YAJIwg-Qe9s&q=" + event.location} >
              </iframe>
              <h2>{event.title}</h2>
              <span>{moment(event.startDate).format('ddd, MMM d, h:mm A ')} {event.endDate ? " - " + moment(event.endDate).format('h:mm A') : ""} </span>
              <p>{event.location}</p>
            </a>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
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
