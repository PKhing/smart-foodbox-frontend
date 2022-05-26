import Typography from 'common/components/Typography'
import React, { useEffect } from 'react'
import { MdOutlineHistory } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'
import Card from './components/Card'
import { CardContainer, Container } from './styled'
import NoFood from './components/NoFood'
import useFood from './hooks/useFood'

const Home = () => {
  const { newFood, history } = useFood()

  return (
    <Container>
      <Typography variant="h1">
        <HiSparkles style={{ marginBottom: '-4px', marginRight: '5px' }} />
        New Food
      </Typography>
      <CardContainer>
        {newFood.length !== 0 ? (
          <>
            {newFood.map((food) => (
              <Card key={food.id} {...food} variant="edit" />
            ))}
          </>
        ) : (
          <NoFood />
        )}
      </CardContainer>
      {history.length !== 0 && (
        <>
          <Typography variant="h1" css={{ marginTop: '25px' }}>
            <MdOutlineHistory
              style={{ marginBottom: '-4px', marginRight: '5px' }}
            />
            History
          </Typography>
          <CardContainer>
            {history!.map((food) => (
              <Card key={food.id} {...food} variant={'default'} />
            ))}
          </CardContainer>
        </>
      )}
    </Container>
  )
}

export default Home
