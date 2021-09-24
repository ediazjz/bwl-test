import Head from 'next/head'
import { useState } from 'react'
import { useAuth } from '../components'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useAuth()

  const handleSignUp = (e) => {
    e.preventDefault()

    signUp(email, password)
  }

  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   )
  // }
  // if (loading) {
  //   return <p>Loading...</p>
  // }
  // if (user) {
  //   return (
  //     <div>
  //       <p>Registered User: {user.email}</p>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  )
}
