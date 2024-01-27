import {
  Skeleton,
  Text,
  theme,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

import { Divider } from './Divider'

type AdviceCardProps = {
  adviceId?: number
  hasErrors?: boolean
  errorMessage?: React.ReactNode
  adviceContent?: string
  isLoading?: boolean
  children?: React.ReactNode
}

export function AdviceCard({
  isLoading = false,
  hasErrors = false,
  errorMessage,
  adviceId,
  adviceContent,
  children,
}: AdviceCardProps): JSX.Element {
  const bgCard = useColorModeValue('white', 'blue.500')
  const boxShadow = useColorModeValue('md', 'xl')
  const colorCard = useColorModeValue('blue.900', 'cyan.200')
  const highlightColor = useColorModeValue('green.600', 'green.500')

  return (
    <VStack
      minH="340px"
      bg={bgCard}
      rounded="lg"
      justify="center"
      align="center"
      px="4"
      py="7"
      boxShadow={boxShadow}
      pos="relative"
      spacing={theme.space[8]}
    >
      {hasErrors ? (
        <Text
          color={colorCard}
          maxW="95%"
          textAlign="center"
          display="flex"
          alignItems="center"
          gap="2"
        >
          {errorMessage}
        </Text>
      ) : (
        <>
          <Skeleton fadeDuration={1} isLoaded={!isLoading}>
            <Text
              color={highlightColor}
              letterSpacing="6px"
              fontSize={['x-small', 'xs']}
              textTransform="uppercase"
            >
              Advice {`#${adviceId ?? '--'}`}
            </Text>
          </Skeleton>

          <Skeleton minW="200px" fadeDuration={1} isLoaded={!isLoading}>
            <Text
              color={colorCard}
              maxW="95%"
              fontSize={['2xl', '3xl']}
              textAlign="center"
            >
              &quot;{adviceContent ?? '--'}&quot;
            </Text>
          </Skeleton>

          <Divider />

          {children}
        </>
      )}
    </VStack>
  )
}
