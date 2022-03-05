import { ChakraProvider, Text, Center, VStack, Image, IconButton } from '@chakra-ui/react'

import { DiceIcon } from './components/DiceIcon'

import divider from './assets/pattern-divider-desktop.svg'

import { theme } from './styles/theme'

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Center h="100vh">
        <VStack
          bg="blue.500"
          borderRadius={12}
          w="100%"
          maxW="540px"
          h="340px"
          justify="center"
          align="center"
          px="6"
          pos="relative"
        >
          <Text color="green.500" letterSpacing="3px" fontSize="small" mb="5" textTransform="uppercase">
            Advice #117
          </Text>
          <Text color="cyan.200" maxW="80%" fontSize="2xl" textAlign="center">
            "It is easy to sit up and take notice, what's difficult is getting up and taking action"
          </Text>

          <Image src={divider} alt="Divider" mt="30px !important" />
          <IconButton
            aria-label="Dice"
            icon={<DiceIcon />}
            borderRadius="full"
          />
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default App
