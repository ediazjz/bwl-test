import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { DashboardCard, Layout, Tasks, useAuth } from "../components"
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  const router = useRouter()
  const { currentUser } = useAuth()

  useEffect(() => {
    if(!currentUser) {
      router.push("/")
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>Dashboard | BWL Test</title>
      </Head>

      <div className={styles.grid}>
        <DashboardCard title="Clima" className={styles.weather}><span>hola</span></DashboardCard>
        <DashboardCard title="País seleccionado" className={styles.selectedCountry}><span>hola</span></DashboardCard>
        <DashboardCard title="Hora" className={styles.time}><span>hola</span></DashboardCard>
        <DashboardCard title="Zonas horarias disponibles" className={styles.timeZones}><span>hola</span></DashboardCard>
        <DashboardCard title="Países disponibles" className={styles.countries}><span>hola</span></DashboardCard>

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
