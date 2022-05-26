import { styled } from 'config/stitches.config'

export const TextArea = styled('textarea', {
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #8C8C8C',
  boxSizing: 'border-box',
  color: '$primary600',
  backgroundColor: '$white',
  resize: 'none',
  height: '75px',
  padding: '10px',

  fontFamily: '$IBMPlexSans',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.25rem',

  borderColor: '$primary600',

  '&::-webkit-scrollbar': {
    width: 0,
    background: 'transparent',
  },

  '&::placeholder': {
    color: '$primary400',
  },

  '&:focus': {
    outline: 'transparent',
  },
})
