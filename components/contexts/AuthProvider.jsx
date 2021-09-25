import { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

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

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logOut = () => {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const exports = {
    currentUser,
    signUp,
    logIn,
    logOut
  }

  return (
    <AuthContext.Provider value={exports}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element
}
