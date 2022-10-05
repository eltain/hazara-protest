import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { events } from '../../data/event'
import moment from 'moment-mini'
import Layout from '../../components/Layout'
import Image from 'next/image'

function Protest({ protest }) {
    if (!protest)
        return <div></div>
    return (
        <Layout>
            <h1 className={styles.title}>
                <span>#StopHazaraGenocide</span><br />Protest Map
            </h1>
            <iframe
                width="850"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                src={"https://www.google.com/maps/embed/v1/search?key=AIzaSyClz09WvWSNKUFI-lwPmNO3YAJIwg-Qe9s&q=" + protest?.location} >
            </iframe>
            <h1>{protest?.title || 'Please add title'}</h1>
            <div className={styles.locationWrapper}>
                <div style={{ display: 'flex' }} >
                    <div className={styles.locationContainer} >
                        <div className={styles.iconContainer}>
                            <Image alt="calendar" src="../../calendar.png" width="24" height="24" />
                        </div>
                        <div>
                            <h4>Date & Time</h4>
                            <span>{moment(protest.startDate).format('ddd, MMM DD, h:mm A ')} {protest.endDate ? " - " + moment(protest.endDate).format('h:mm A') : ""}</span>
                        </div>
                    </div>
                    <div className={styles.locationContainer}>
                        <div className={styles.iconContainer}>
                            <Image alt="calendar" src={"../../location-24.png"} width="24" height="24" />
                        </div>
                        <div>
                            <h4>Location</h4>
                            <span>{protest?.location || 'TBC'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const slug = params?.slug[0]
    const protests = JSON.parse(events)
    const protest = protests.find(p => p.slug === slug)
    return {
        props: {
            protest: protest ? protest : null
        }
    }
}

export async function getStaticPaths({ props }) {
    const protests = JSON.parse(events)

    return {
        paths: protests.map((p) => `/protests/${p.slug}`) || [],
        fallback: true,

    }
}

export default Protest