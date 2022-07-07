import { ChakraProvider, Center, Flex, useColorModeValue, Text, Link } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AdviceCard } from './components/AdviceCard'
import { Header } from './components/Header'

import { theme } from './styles/theme'

const queryClient = new QueryClient()

function Container() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const highlighColor = useColorModeValue('green.600', 'green.500')

  return (
    <Flex flexDir="column" h="100vh" bgColor={bgColor}>
      <Header />
      <Center as="main" flex="1" flexDir="column" px="1">
        <AdviceCard />
      </Center>
      <Center as="footer" h="14">
        <Text as="small">
          Desenvolvido com ❤️ por{' '}
          <Link
            href="https://github.com/pedrocs378"
            target="_blank"
            rel="noreferrer noopener"
            color={highlighColor}
          >
            Pedro César
          </Link>
        </Text>
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
