import Head from 'next/head'

import PropTypes from 'prop-types'

import { AuthProvider } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
