import React from 'react'

import styles from '../styles/Home.module.css'
import { EVENTS, CONTINENTS } from '../data/event'
import moment from 'moment-mini'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

function Home({ protests }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const [continent, setContinent] = React.useState('Show All')
  const [selectedProtests, setSelectedProtests] = React.useState([])
  React.useEffect(() => {
    if (continent && continent !== 'Show All') {
      const newLists = protests.filter(p => p.continent === continent)
      setSelectedProtests(newLists)
    } else {
      setSelectedProtests(protests)
    }
  }, [continent])

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };
  const handleContinentChange = value => {
    setPage(0)
    setContinent(value)
  }

  return (
    <Layout>
      <h1 className={styles.title}>
        <span>#StopHazaraGenocide</span><br /> Protest Map
      </h1>
      <div className={styles.chipContainer} >
        {CONTINENTS.map((con, i) => <div key={"" + i} className={styles.chip + " " + (continent === con ? styles.selected : "")} onClick={() => handleContinentChange(con)} >{con}</div>)}
      </div>
      <div className={styles.grid}>
        {selectedProtests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(protest =>
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
      <div style={{ padding: '1rem' }} >
        {Array.from({ length: Math.ceil(selectedProtests.length / 12) }, (_, i) => i + 1).map(i => <span key={"" + i} onClick={(e) => handleChangePage(e, i)} className={styles.indicator + " " + (page+1 === i ? styles.selected : "")}>{i}</span>)}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      protests: JSON.parse(EVENTS)
    }
  }
}

export default Home