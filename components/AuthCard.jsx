import Link from 'next/link'

import PropTypes from 'prop-types'

import styles from '../styles/AuthCard.module.css'

export const AuthCard = ({ type, children, error}) => {
  return (
    <div className={styles.container}>
      <h1 className={`h6 ${styles.title}`}>
        {type === "login" ? "Bienvenido" : "Crear cuenta"}
      </h1>

      {error && <span className={styles.errorMessage}>{error}</span>}

      {children}

      <div className={styles.options}>
        <span>
          {type === "login" ? "¿No tienes cuenta?" : "¿Ya tienes una cuenta?"}
        </span>

        <Link href={type === "login" ? "/signup" : "/"}>
          <a className={styles.link}>
            {type === "login" ? "Regístrate" : "Inicia sesión"}
          </a>
        </Link>
      </div>
    </div>
  )
}

AuthCard.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']),
  children: PropTypes.node,
  error: PropTypes.string
}
