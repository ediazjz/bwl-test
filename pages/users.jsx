import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Layout, useAuth } from "../components"
import styles from '../styles/Users.module.css'

export default function Users() {
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
        <title>Usuarios | BWL Test</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.container__heading}>
          <h1 className={`h6 ${styles.title}`}>Lista de usuarios del sistema</h1>

          <hr />
        </div>

        <div className={styles.containerTable}>
        <table className={styles.usersList}>
          <thead>
            <tr>
              <th>Nombre</th>
            </tr>
            <tr>
              <th>Correo electónico</th>
            </tr>
            <tr>
              <th>Fecha de registro</th>
            </tr>
            <tr>
              <th>Último login</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Luis Miguel</td>
              <td>luis.miguel@gmail.com</td>
              <td>19/09/2021</td>
              <td>22/09/2021 11:25</td>
            </tr>
            <tr>
              <td>Julieta Venegas</td>
              <td>julieta.venegas@gmail.com</td>
              <td>20/09/2021</td>
              <td>21/09/2021 20:45</td>
            </tr>
            <tr>
              <td>Edgar Diaz</td>
              <td>edagr.diaz@gmail.com</td>
              <td>23/09/2021</td>
              <td>24/09/2021 06:31</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </Layout>
  )
}
