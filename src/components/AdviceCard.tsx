import {
  IconButton,
  Text,
  VStack,
  Skeleton,
  useColorModeValue,
  Alert,
  AlertIcon,
  theme
} from '@chakra-ui/react'

import { useApiGenerateAdvice } from '../hooks/use-api-generate-advice'

import { DiceIcon } from './DiceIcon'
import { Divider } from './Divider'

export function AdviceCard() {
  const bgCard = useColorModeValue('white', 'blue.500')
  const colorCard = useColorModeValue('blue.900', 'cyan.200')
  const highlighColor = useColorModeValue('green.600', 'green.500')
  const boxShadow = useColorModeValue('md', 'xl')

  const {
    data: adviceData,
    isLoading,
    isFetching,
    error,
    refetch
  } = useApiGenerateAdvice()

  const handleGenerateNewAdvice = async () => {
    await refetch()
  }

  return (
    <>
      {error && (
        <Alert status="error" variant="solid" mb="4" borderRadius="md" maxW="540px">
          <AlertIcon />
          Oops! ocorreu algum erro
        </Alert>
      )}
      <VStack
        w="100%"
        maxW="540px"
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
        <Skeleton
          fadeDuration={1}
          isLoaded={!isLoading}
        >
          <Text
            color={highlighColor}
            letterSpacing="6px"
            fontSize={['x-small', 'xs']}
            textTransform="uppercase"
          >
            Advice {`#${adviceData?.slip.id}`}
          </Text>
        </Skeleton>

        <Skeleton
          minW="200px"
          fadeDuration={1}
          isLoaded={!isLoading}
        >
          <Text
            color={colorCard}
            maxW="95%"
            fontSize={['2xl', '3xl']}
            textAlign="center"
          >
            "{adviceData?.slip.advice}"
          </Text>
        </Skeleton>

        <Divider />

        <IconButton
          icon={<DiceIcon />}
          aria-label="Dice"
          height={['14', '12']}
          minW={['14', '12']}
          bg={highlighColor}
          _active={{
            filter: 'brightness(0.9)',
            background: highlighColor
          }}
          _hover={{
            background: highlighColor,
            boxShadow: `0 0 16px ${theme.colors.green[400]}`
          }}
          borderRadius="full"
          pos="absolute"
          top={`calc(100% - ${theme.space[6]})`}
          mt="0 !important"
          onClick={handleGenerateNewAdvice}
          isLoading={isLoading || isFetching}
        />
      </VStack>
    </>
  )
}