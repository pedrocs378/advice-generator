import { ChakraProvider, Center, Flex, useColorModeValue } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AdviceCard } from './components/AdviceCard'
import { Header } from './components/Header'

import { theme } from './styles/theme'

const queryClient = new QueryClient()

function Container() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')

  return (
    <Flex flexDir="column" h="100vh" bgColor={bgColor}>
      <Header />
      <Center as="main" flex="1" flexDir="column">
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
