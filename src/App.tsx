import { ChakraProvider, Center } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AdviceCard } from './components/AdviceCard'

import { theme } from './styles/theme'

const queryClient = new QueryClient()

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Center h="100vh" flexDir="column">
          <AdviceCard />
        </Center>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
