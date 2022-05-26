import Typography from 'common/components/Typography'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Card from './components/Card'
import { CardContainer, Container } from './styled'

const Home = () => {
  const isSmall = useMediaQuery({
    query: '(max-width: 735px)',
  })
  return (
    <Container>
      <Typography variant="h1">New Food</Typography>
      <CardContainer>
        <Card time={new Date()} weight={200} variant="edit" />
        <Card time={new Date()} weight={200} variant="edit" />
      </CardContainer>

      <Typography variant="h1" css={{ marginTop: '25px' }}>
        History
      </Typography>
      <CardContainer>
        <Card
          time={new Date()}
          weight={200}
          variant={isSmall ? 'short' : 'default'}
          note="ทำไม genshin เกลือจังครับ"
        />
        <Card
          time={new Date()}
          weight={200}
          variant={isSmall ? 'short' : 'default'}
          note="ทำไม genshin เกลือจังครับ"
        />
        <Card
          time={new Date()}
          weight={200}
          variant={isSmall ? 'short' : 'default'}
        />
      </CardContainer>
    </Container>
  )
}

export default Home
