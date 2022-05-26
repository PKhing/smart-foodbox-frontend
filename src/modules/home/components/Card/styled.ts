import { styled } from 'config/stitches.config'
import { MdAccessTimeFilled } from 'react-icons/md'
import { FaWeight } from 'react-icons/fa'

export const CardContainer = styled('div', {
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  width: '100%',
  padding: '10px',
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: '220px',
  position: 'relative',
})

export const InformationConatainer = styled('div', {
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
})

export const ClockIcon = styled(MdAccessTimeFilled, {
  color: '$primary600',
  fontSize: '1.5rem',
})

export const WeigtIcon = styled(FaWeight, {
  color: '$primary600',
  fontSize: '1.25rem',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '10px',
  justifyContent: 'flex-end',
})
