import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AuthCard, Layout, useAuth } from '../components'
import styles from '../styles/Home.module.css'
import { validateEmail } from '../lib/validations'

export default function Home() {
  const router = useRouter()
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })
  const { logIn } = useAuth()
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()

    // Form Validations
    if(!validateEmail(formData.email)) {
      return setError("Por favor, ingresa un correo eletrónico válido")
    }

    try {
      setError('')
      setIsLoading(true)
      await logIn(formData.email, formData.password)
      router.push("/dashboard")
    }
    catch(err) {
      err.code === "auth/user-not-found"
        ? setError("No existe una cuenta con este correo electrónico")
        : setError("Contraseña incorrecta")
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <Layout>
      <Head>
        <title>BWL Test</title>
      </Head>

      <AuthCard type="login" error={error}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.email}>
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="Tu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.password}>
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Tu contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn--primary" type="submit" disabled={isLoading}>
            {isLoading ? "Loading" : "Enviar"}
          </button>
        </form>
      </AuthCard>
    </Layout>
  )
}
