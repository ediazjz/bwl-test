import Link from 'next/link'
import { useRouter } from 'next/router'

import PropTypes from 'prop-types'

import { useAuth } from "../components"
import styles from '../styles/Layout.module.css'

export const Layout = ({ children }) => {
  const router = useRouter()
  const { currentUser, logOut } = useAuth()

  const handleLogOut = async() => {
    try {
      await logOut()
      router.push("/")
    } catch {
      alert("Algo salió mal al cerrar la sesión, intenta de nuevo")
    }
  }

  return (
    <>
      {(router.pathname !== "/" && router.pathname !== "/signup") &&
        <header className={`container ${styles.header}`}>
          <nav className={styles.navbar}>
            <ul>
              <li className={`${styles.item} ${(router.pathname === "/dashboard") && styles.active}`}>
                <Link href="/dashboard">
                  <a>
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className={`${styles.item} ${(router.pathname === "/users") && styles.active}`}>
                <Link href="/users">
                  <a>
                    Usuarios
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            {currentUser && (
              <button className={`btn btn--outline ${styles.logout}`} onClick={handleLogOut}>
                Cerrar sesión
              </button>
            )}
          </div>
        </header>
      }

      <main className={`container ${styles.main}`}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
