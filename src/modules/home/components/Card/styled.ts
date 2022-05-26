import { styled } from 'config/stitches.config'
import { MdAccessTimeFilled } from 'react-icons/md'
import { FaWeight } from 'react-icons/fa'
import { AiOutlineExpandAlt, AiOutlineShrink } from 'react-icons/ai'
import { RiEditBoxFill } from 'react-icons/ri'

export const CardContainer = styled('div', {
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  padding: '10px',
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'gap 1s',
  width: '350px',
  '@sm': {
    width: '100%',
  },
  variants: {
    expand: {
      false: {
        gap: '0px',
      },
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: '220px',
  position: 'relative',
  transition: 'height 1s',
  variants: {
    expand: { false: { height: '0px' } },
  },
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

export const NoteIcon = styled(RiEditBoxFill, {
  color: '$primary600',
  fontSize: '1.5rem',
})

export const ExpandIcon = styled(AiOutlineExpandAlt, {
  color: '$primary700',
  fontSize: '1.5rem',
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  cursor: 'pointer',
})

export const ShrinkIcon = styled(AiOutlineShrink, {
  color: '$primary700',
  fontSize: '1.5rem',
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  cursor: 'pointer',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '10px',
  justifyContent: 'flex-end',
})

export const LongInfoContainer = styled('div', {
  maxHeight: '300px',
  transition: 'max-height 1s',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  gap: '10px',
  variants: {
    expand: { false: { maxHeight: '0px' } },
  },
})
