import { styled } from 'config/stitches.config'

export const Button = styled('button', {
  padding: '5px 20px',
  fontFamily: '$IBMPlexSans',
  fontWeight: '500',
  fontSize: '1rem',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$primary500',
        '&:hover': {
          backgroundColor: '$primary600',
        },
      },
      secondary: {
        color: '$primary700',
        backgroundColor: '$primary200',
        '&:hover': {
          backgroundColor: '$primary300',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
