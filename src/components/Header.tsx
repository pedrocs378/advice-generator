import { Flex, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

export function Header(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex as="header" align="center" justify="flex-end" px="4" h="14">
      <IconButton
        aria-label="Theme button"
        bg="transparent"
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>
  )
}
