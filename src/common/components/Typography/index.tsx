import React from 'react'
import { StyledTypography } from './styled'
import { TypographyProps } from './types'

const Typography = ({ css, color, ...props }: TypographyProps) => {
  return (
    <StyledTypography
      {...props}
      css={{ color: color || '$primary800', ...css }}
    />
  )
}

export default Typography
