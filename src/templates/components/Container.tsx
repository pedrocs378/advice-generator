import { Center, Flex, useColorModeValue } from '@chakra-ui/react'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

type ContainerProps = {
  children?: React.ReactNode
}

export function Container({ children }: ContainerProps): JSX.Element {
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
