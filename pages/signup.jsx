import { useState } from 'react'
import Head from 'next/head'

import { AuthCard, Layout, useAuth } from "../components"
import styles from '../styles/SignUp.module.css'
import { validateEmail } from '../lib/validations'

export default function SignUp() {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  })
  const { signUp } = useAuth()
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()

    // Form Validations
    if(!validateEmail(formData.email)) {
      return setError("El correo electrónico no es válido")
    }
    if(formData.password !== formData.confirmPassword) {
      return setError("Las contraseñas no coinciden")
    }
    // I'm checking for only 8 characthers to allow names of the English language, like John Doe
    if(formData.fullName.length < 8) {
      return setError("El nombre no es lo suficientemente largo")
    }

    try {
      setError('')
      setIsLoading(true)
      await signUp(formData.email, formData.password)
    }
    catch {
      setError("Ocurrió un error al crear la cuenta. Intenta de nuevo por favor")
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
        <title>Crear cuenta | BWL Test</title>
      </Head>

      <AuthCard type="signup" error={error}>
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
              placeholder="Crea una contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.repeatPassword}>
            <label>Confirmar contraseña</label>
            <input
              type="password"
              placeholder="Repite tu contraseña"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className={styles.name}>
            <label>Nombre completo</label>
            <input
              type="text"
              placeholder="Tu nombre completo"
              name="fullName"
              value={formData.fullName}
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
