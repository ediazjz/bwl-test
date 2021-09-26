import Head from 'next/head'

import { Countries, Country, DashboardCard, Layout, Tasks, TimeZones, CountryProvider, TimeZoneProvider, Weather } from "../components"
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard | BWL Test</title>
      </Head>

      <div className={styles.grid}>
        <CountryProvider>
          <DashboardCard title="Países disponibles" className={styles.countries}>
            <Countries />
          </DashboardCard>
          <DashboardCard title="País seleccionado" className={styles.selectedCountry}>
            <Country />
          </DashboardCard>

          <TimeZoneProvider>
            <DashboardCard title="Clima" className={styles.weather}>
              <Weather />
            </DashboardCard>
            <DashboardCard title="Hora" className={styles.time}><span>hola</span></DashboardCard>
            <DashboardCard title="Zonas horarias disponibles" className={styles.timeZones}>
              <TimeZones />
            </DashboardCard>
          </TimeZoneProvider>
        </CountryProvider>

        <DashboardCard title="Tareas pendientes" className={styles.pendingTasks}>
          <Tasks content={tasksList.filter(task => task.state === "pending")} />
        </DashboardCard>
        <DashboardCard title="Tareas completadas" className={styles.completedTasks}>
          <Tasks content={tasksList.filter(task => task.state === "done")} />
        </DashboardCard>
      </div>
    </Layout>
  )
}

const tasksList = [
  {
    state: "pending",
    value: "Ir al banco"
  },
  {
    state: "pending",
    value: "Revisar balance general"
  },
  {
    state: "pending",
    value: "Ajustar métricas de diseño"
  },
  {
    state: "done",
    value: "Terminar prueba"
  },
  {
    state: "done",
    value: "Debuggear código"
  },
  {
    state: "done",
    value: "Realizar pruebas unitarias"
  }
]
