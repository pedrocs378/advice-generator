import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ChakraProvider, theme } from '@chakra-ui/react'

import { MyAdvicesProvider } from './contexts/MyAdvicesContext'

import { router } from './router/router'
import { queryClient } from './libs/react-query'

export function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MyAdvicesProvider>
          <RouterProvider router={router} />
        </MyAdvicesProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
