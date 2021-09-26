import Head from 'next/head'

import { Countries, DashboardCard, Layout, Tasks } from "../components"
import { CountryProvider } from '../components/contexts/CountryProvider'
import styles from '../styles/Dashboard.module.css'

// export async function getServerSideProps(context) {
//   const res = await fetch("http://api.timezonedb.com/v2.1/list-time-zone?key=LLXYFKR07KQM&format=json&zone=America*")
//   const data = await res.json()

//   return {
//     props: {
//       countriesList: data.zones
//     },
//   }
// }

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
          <DashboardCard title="Clima" className={styles.weather}><span>hola</span></DashboardCard>
          <DashboardCard title="País seleccionado" className={styles.selectedCountry}><span>hola</span></DashboardCard>
          <DashboardCard title="Hora" className={styles.time}><span>hola</span></DashboardCard>
          <DashboardCard title="Zonas horarias disponibles" className={styles.timeZones}><span>hola</span></DashboardCard>
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
