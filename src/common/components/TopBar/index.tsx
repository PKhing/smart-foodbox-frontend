import React from 'react'
import Typography from '../Typography'
import { Container, DarkModeIcon, LightModeIcon, StyledIcon } from './styled'
import { TopBarProps } from './types'

const TopBar = ({ theme, toggleTheme }: TopBarProps) => {
  return (
    <Container>
      <StyledIcon />
      <Typography
        variant="h1"
        color="$primary600"
        css={{ marginBottom: '-10px', flexGrow: 1 }}
      >
        Smart Foodbox
      </Typography>
      {theme === 'light' ? (
        <DarkModeIcon onClick={toggleTheme} />
      ) : (
        <LightModeIcon onClick={toggleTheme} />
      )}
    </Container>
  )
}

export default TopBar
