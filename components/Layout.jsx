import Link from 'next/link'
import { useRouter } from 'next/router'

import PropTypes from 'prop-types'

import { useAuth } from "../components"
import { auth } from '../lib/firebase'
import styles from '../styles/Layout.module.css'

export const Layout = ({ children }) => {
  const router = useRouter()
  const { currentUser } = useAuth()

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
              <button className={`btn btn--outline ${styles.logout}`} onClick={() => {auth.signOut(); router.push("/")}}>
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
