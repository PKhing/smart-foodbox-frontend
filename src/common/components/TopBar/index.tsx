import React from 'react'
import Typography from '../Typography'
import { Container, StyledIcon } from './styled'

const TopBar = () => {
  return (
    <Container>
      <StyledIcon />
      <Typography
        variant="h1"
        color="$primary600"
        css={{ marginBottom: '-10px' }}
      >
        Smart Foodbox
      </Typography>
    </Container>
  )
}

export default TopBar
