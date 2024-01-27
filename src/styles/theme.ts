import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {
    gray: {
      '100': '#f9f9f9',
    },
    blue: {
      '500': '#313A49',
      '900': '#202632',
    },
    cyan: {
      '200': 'hsl(193, 38%, 86%)',
    },
    green: {
      '500': 'hsl(150, 100%, 66%)',
      '600': 'hsl(150, 100%, 45%)',
    },
  },
  fonts: {
    heading: 'Manrope',
    body: 'Manrope',
  },
})
