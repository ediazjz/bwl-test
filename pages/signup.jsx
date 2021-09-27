import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { firestore, serverTimestamp } from '../lib/firebase'
import { validateEmail } from '../lib/validations'
import { AuthCard, Layout, useAuth } from "../components"
import styles from '../styles/SignUp.module.css'

export default function SignUp() {
  const router = useRouter()
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  })
  const { signUp, updateName } = useAuth()
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()

    // Form Validations
    if(!validateEmail(formData.email)) {
      return setError("El correo electrónico no es válido")
    }
    if(formData.password < 6) {
      return setError("La contraseña debe tener al menos 6 caracteres")
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
      const formRes = await signUp(formData.email, formData.password)

      try {
        const userID = formRes.user.providerData[0].uid
        const userDoc = firestore.doc(`users/${userID}`)
        const data = {
          fullName: formData.fullName,
          email: formData.email,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp()
        }

        await userDoc.set(data)
        router.push("/dashboard")
      }
      catch(err) {
        console.log(err)
        setError("Ocurrió un error al configurar tu nombre")
      }
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
