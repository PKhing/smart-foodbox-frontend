import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import TopBar from 'common/components/TopBar'
import { darkTheme, styled } from 'config/stitches.config'

const Container = styled('div', {
  backgroundColor: '$white',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={darkTheme}>
      <Head>
        <title>Smart Foodbox</title>
        <meta
          name="description"
          content="Smart Foodbox Project | 2110366 Embedded System Laboratory 2/2021 | CU Engineering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <TopBar />
        <Component {...pageProps} />
      </Container>
    </div>
  )
}

export default MyApp
