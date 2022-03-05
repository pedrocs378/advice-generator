import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'blue.900',
        color: 'cyan.200'
      }
    }
  },
  colors: {
    blue: {
      '500': '#313A49',
      '900': '#202632'
    },
    cyan: {
      '200': 'hsl(193, 38%, 86%)'
    },
    green: {
      '500': 'hsl(150, 100%, 66%)'
    }
  },
  fonts: {
    heading: 'Manrope',
    body: 'Manrope'
  }
})
