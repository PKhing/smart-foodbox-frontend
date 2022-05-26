import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import TopBar from 'common/components/TopBar'
import { darkTheme, styled } from 'config/stitches.config'
import useTheme from 'common/hooks/useTheme'

const Container = styled('div', {
  backgroundColor: '$white',
  minHeight: '100vh',
})

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={theme === 'dark' ? darkTheme : undefined}>
      <Head>
        <title>Smart Foodbox</title>
        <meta
          name="description"
          content="Smart Foodbox Project | 2110366 Embedded System Laboratory 2/2021 | CU Engineering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <TopBar theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </Container>
    </div>
  )
}

export default MyApp
