import Head from 'next/head'

import { Layout } from "../components";
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard | BWL Test</title>
      </Head>

      <div className={styles.grid}>
        <div className={styles.weather}></div>
        <div className={styles.selectedCountry}></div>
        <div className={styles.pendingTasks}></div>
        <div className={styles.completedTasks}></div>
        <div className={styles.time}></div>
        <div className={styles.timeZones}></div>
        <div className={styles.countries}></div>
      </div>
    </Layout>
  )
}
