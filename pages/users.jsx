import Head from 'next/head'

import PropTypes from 'prop-types'

import { firestore } from '../lib/firebase'
import { Layout } from "../components"
import styles from '../styles/Users.module.css'

export async function getServerSideProps() {
  const usersDoc = await getUsers()

  const usersList = usersDoc.docs.map(doc => {
    const data = doc.data()
    const id = doc.id

    return {
      id,
      ...data
    }
  })

  const users = JSON.stringify(usersList)
  return {
    props: {
      users
    }
  }
}

async function getUsers() {
  const snapshot = await firestore.collection('users').get()
  return snapshot
}

export default function Users({ users }) {
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
            {JSON.parse(users).map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.createdAt.seconds * 1000).toLocaleDateString('es-MX')}</td>
                  <td>{new Date(user.lastLoginAt.seconds * 1000).toLocaleDateString('es-MX', { hour: 'numeric', minute: 'numeric' })}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </Layout>
  )
}

Users.propTypes = {
  users: PropTypes.string.isRequired
}
