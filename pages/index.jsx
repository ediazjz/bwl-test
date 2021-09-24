import Head from 'next/head'
import { AuthCard, Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>BWL Test</title>
      </Head>

      <AuthCard type="login">
      </AuthCard>
    </Layout>
  )
}
