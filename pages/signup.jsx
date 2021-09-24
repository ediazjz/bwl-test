import Head from 'next/head'

import { AuthCard, Layout } from "../components"
import styles from '../styles/SignUp.module.css'

export default function SignUp() {
  return (
    <Layout>
      <Head>
        <title>Crear cuenta | BWL Test</title>
      </Head>

      <AuthCard type="signup">
        <form>
          <div className={styles.email}>
            <label>Correo electrónico</label>
            <input type="email" placeholder="Tu email" />
          </div>

          <div className={styles.password}>
            <label>Contraseña</label>
            <input type="password" placeholder="Crea una contraseña" />
          </div>

          <div className={styles.repeatPassword}>
            <label>Confirmar contraseña</label>
            <input type="password" placeholder="Repite tu contraseña" />
          </div>

          <div className={styles.name}>
            <label>Nombre completo</label>
            <input type="text" placeholder="Tu nombre completo" />
          </div>

          <button className="btn btn--primary">
            Enviar
          </button>
        </form>
      </AuthCard>
    </Layout>
  )
}
