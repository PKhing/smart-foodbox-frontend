import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  padding: '15px',
  margin: 'auto',
  width: '380px',
  '@sm': {
    width: '100%',
  },
  '@media screen and (min-width: 735px)': {
    width: '735px',
  },
  '@media screen and (min-width: 1090px)': {
    width: '1090px',
  },
})

export const CardContainer = styled('div', {
  display: 'flex',
  gap: '5px',
  flexWrap: 'wrap',
})
