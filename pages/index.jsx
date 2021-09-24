import Head from 'next/head'

import { AuthCard, Layout } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>BWL Test</title>
      </Head>

      <AuthCard type="login">
        <form>
          <div className={styles.email}>
            <label>Correo electrónico</label>
            <input type="email" placeholder="Tu email" />
          </div>

          <div className={styles.password}>
            <label>Contraseña</label>
            <input type="password" placeholder="Tu contraseña" />
          </div>

          <button className="btn btn--primary">
            Enviar
          </button>
        </form>
      </AuthCard>
    </Layout>
  )
}
