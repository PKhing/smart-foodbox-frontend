import Typography from 'common/components/Typography'
import React from 'react'
import Card from './components/Card'
import { CardContainer, Container } from './styled'

const Home = () => {
  return (
    <Container>
      <Typography variant="h1">New Food</Typography>
      <CardContainer>
        <Card time={new Date()} weight={200} variant="withButton" />
        <Card time={new Date()} weight={200} variant="withButton" />
      </CardContainer>

      <Typography variant="h1" css={{ marginTop: '25px' }}>
        History
      </Typography>
      <CardContainer>
        <Card time={new Date()} weight={200} variant="short" />
        <Card time={new Date()} weight={200} variant="short" />
        <Card time={new Date()} weight={200} variant="short" />
      </CardContainer>
    </Container>
  )
}

export default Home
