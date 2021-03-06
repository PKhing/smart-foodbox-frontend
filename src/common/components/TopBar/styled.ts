import { styled } from 'config/stitches.config'
import { MdDarkMode, MdFastfood, MdLightMode } from 'react-icons/md'

export const Container = styled('div', {
  padding: '15px 20px',
  boxShadow: '$shadow1',
  width: '100%',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  backgroundColor: '$white',
  '@sm': {
    padding: '10px',
  },
})
export const StyledIcon = styled(MdFastfood, {
  color: '$primary600',
  fontSize: '2.25rem',
})

export const DarkModeIcon = styled(MdDarkMode, {
  color: '$primary600',
  fontSize: '1.5rem',
  cursor: 'pointer',
})

export const LightModeIcon = styled(MdLightMode, {
  color: '$primary600',
  fontSize: '1.5rem',
  cursor: 'pointer',
})
