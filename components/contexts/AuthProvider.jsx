import { createContext, useContext, useEffect, useState } from 'react'

import { auth } from '../../lib/firebase'

const AuthContext = createContext()
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const exports = {
    currentUser,
    signUp
  }

  return (
    <AuthContext.Provider value={exports}>
      {children}
    </AuthContext.Provider>
  )
}
