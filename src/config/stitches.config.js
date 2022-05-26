import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary200: '#E0F0DF',
      primary300: '#CBE6CF',
      primary400: '#B6DBC3',
      primary500: '#68A7AD',
      primary600: '#5A8698',
      primary700: '#3F4C6E',
      primary800: '#323459',
    },
    fonts: {
      IBMPlexSans: "'IBM Plex Sans Thai', sans-serif",
    },
  },
  media: {
    xs: '(max-width: 360px)',
    sm: '(max-width: 496px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 960px)',
    xl: '(max-width: 1280px)',
  },
})

globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap')",
  ],
})()
