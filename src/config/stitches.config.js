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
      white: '#FFFFFF',
    },
    fonts: {
      IBMPlexSans: "'IBM Plex Sans Thai', sans-serif",
    },
    shadows: {
      shadow1: '0px 2px 5px 0px #00000026',
      shadow2: '0px 2px 4px rgba(0, 0, 0, 0.25)',
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

export const darkTheme = createTheme('dark-theme', {
  colors: {
    white: '#323459',
    primary200: '#3F4C6E',
    primary300: '#5A8698',
    primary400: '#5A8698',
    primary500: '#68A7AD',
    primary600: '#B6DBC3',
    primary700: '#CBE6CF',
    primary800: '#E0F0DF',
  },
  fonts: {
    IBMPlexSans: "'IBM Plex Sans Thai', sans-serif",
  },
  shadows: {
    shadow1: '0px 2px 5px rgba(0, 0, 0, 0.5)',
    shadow2: '0px 2px 4px rgba(0, 0, 0, 0.75)',
  },
})

globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap')",
  ],
})()
