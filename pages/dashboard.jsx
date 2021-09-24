import Head from 'next/head'

import { DashboardCard, Layout } from "../components"
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard | BWL Test</title>
      </Head>

      <div className={styles.grid}>
        <DashboardCard title="Clima" className={styles.weather}><span>hola</span></DashboardCard>
        <DashboardCard title="País seleccionado" className={styles.selectedCountry}><span>hola</span></DashboardCard>
        <DashboardCard title="Tareas pendientes" className={styles.pendingTasks}><span>hola</span></DashboardCard>
        <DashboardCard title="Tareas completadas" className={styles.completedTasks}><span>hola</span></DashboardCard>
        <DashboardCard title="Hora" className={styles.time}><span>hola</span></DashboardCard>
        <DashboardCard title="Zonas horarias disponibles" className={styles.timeZones}><span>hola</span></DashboardCard>
        <DashboardCard title="Países disponibles" className={styles.countries}><span>hola</span></DashboardCard>
      </div>
    </Layout>
  )
}
