import { StyledTypography } from './styled'

export interface TypographyProps
  extends React.ComponentProps<typeof StyledTypography> {
  color?:
    | '$primary200'
    | '$primary300'
    | '$primary400'
    | '$primary500'
    | '$primary600'
    | '$primary700'
    | '$primary800'
}
