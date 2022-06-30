import { ChakraProvider, Center, Box, Flex } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AdviceCard } from './components/AdviceCard'
import { Header } from './components/Header'

import { theme } from './styles/theme'

const queryClient = new QueryClient()

function Container() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Center flex="1" flexDir="column">
        <AdviceCard />
      </Center>
    </Flex>
  )
}

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
