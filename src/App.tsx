import {
  ChakraProvider,
  Center,
  Flex,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab
} from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { MyAdvicesProvider } from './contexts/MyAdvicesContext'

import { CurrentAdvice } from './components/CurrentAdvice'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MyAdvices } from './components/MyAdvices'

import { theme } from './styles/theme'

const queryClient = new QueryClient()

type ContainerProps = {
  children?: React.ReactNode
}

function Container({ children }: ContainerProps): JSX.Element {
  const bgColor = useColorModeValue('blackAlpha.100', 'gray.800')

  return (
    <Flex flexDir="column" h="100vh" bgColor={bgColor}>
      <Header />

      <Center as="main" flex="1" flexDir="column" px="4">
        {children}
      </Center>

      <Footer />
    </Flex>
  )
}

function App(): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MyAdvicesProvider>
          <Container>
            <Tabs w="100%" maxW="540px" isFitted>
              <TabList>
                <Tab>Advice</Tab>
                <Tab>My Advices</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <CurrentAdvice />
                </TabPanel>
                <TabPanel>
                  <MyAdvices />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </MyAdvicesProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export { App }
