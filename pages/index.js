import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { events } from '../data/event'
import moment from 'moment-mini'
import Layout from '../components/Layout'
import Link from 'next/link'
const DATE_FORMAT = 'DD'
function Home({ protests }) {

  return (
    <Layout>
      <h1 className={styles.title}>
        <span>#StopHazaraGenocide</span><br/> Protest Map
      </h1>

      <p className={styles.description}>
        To add your protest location, <a href="https://docs.google.com/forms/d/1n-53iQJLTQjCOcRdhl_2G1E_KNQ9X5rNt57jFsD9_2g/viewform?edit_requested=true"> Please fill the form here</a>
      </p>

      <div className={styles.grid}>
        {protests.map(protest =>
          <Link key={protest.id} href={"/protests/" + encodeURIComponent(protest.slug)} className={styles.link}>
            <div className={styles.card}>
              <iframe
                width="250"
                height="150"
                style={{ border: 0 }}
                loading="lazy"
                src={"https://www.google.com/maps/embed/v1/search?key=AIzaSyClz09WvWSNKUFI-lwPmNO3YAJIwg-Qe9s&q=" + protest?.location} >
              </iframe>
              <h2>{protest.title}</h2>
              <span>{moment(protest.startDate).format('ddd, MMM DD, h:mm A ')} {protest.endDate ? " - " + moment(protest.endDate).format('h:mm A') : ""} </span>
              <p>{protest?.location}</p>
            </div>
          </Link>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      protests: JSON.parse(events)
    }
  }
}

export default Home