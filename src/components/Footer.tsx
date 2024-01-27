import { Center, Link, Text, useColorModeValue } from '@chakra-ui/react'

export function Footer(): JSX.Element {
  const highlighColor = useColorModeValue('green.600', 'green.500')

  return (
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
  )
}
