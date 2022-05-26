import { styled } from 'config/stitches.config'
import { MdFastfood } from 'react-icons/md'

export const Container = styled('div', {
  padding: '15px 20px',
  boxShadow: '0px 2px 5px 0px #00000026',
  width: '100%',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  '@sm': {
    padding: '10px',
  },
})
export const StyledIcon = styled(MdFastfood, {
  color: '$primary600',
  fontSize: '2.25rem',
})
