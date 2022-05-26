import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import TopBar from 'common/components/TopBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
