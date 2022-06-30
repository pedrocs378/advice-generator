import { IconButton, Image, Text, VStack, useTheme, Skeleton } from '@chakra-ui/react'

import { useApiGenerateAdvice } from '../hooks/use-api-generate-advice'

import { DiceIcon } from './DiceIcon'

import divider from '../assets/pattern-divider-desktop.svg'

export function AdviceCard() {
  const theme = useTheme()

  const { data: adviceData, isLoading, isFetching, error, refetch } = useApiGenerateAdvice()

  const handleGenerateNewAdvice = async () => {
    await refetch()
  }

  return (
    <>
      {error && (
        <Text color="red.500" mb="4">
          Oops! ocorreu um erro
        </Text>
      )}
      <VStack
        w="100%"
        maxW="540px"
        minH="340px"
        bg="blue.500"
        rounded="lg"
        justify="center"
        align="center"
        p="6"
        boxShadow="xl"
        pos="relative"
        spacing={theme.space['8']}
      >
        <Skeleton
          startColor="blackAlpha.500"
          endColor="blackAlpha.600"
          isLoaded={!isLoading}
        >
          <Text color="green.500" letterSpacing="6px" fontSize="xs" textTransform="uppercase">
            Advice {`#${adviceData?.slip.id}`}
          </Text>
        </Skeleton>

        <Skeleton
          startColor="blackAlpha.500"
          endColor="blackAlpha.600"
          isLoaded={!isLoading}
        >
          <Text color="cyan.200" maxW="95%" fontSize="3xl" textAlign="center">
            "{adviceData?.slip.advice}"
          </Text>
        </Skeleton>

        <Image src={divider} alt="Divider" />

        <IconButton
          icon={<DiceIcon />}
          aria-label="Dice"
          size="lg"
          colorScheme="green"
          _active={{
            filter: 'brightness(0.9)',
            background: 'green.500'
          }}
          _hover={{
            background: 'green.500',
            boxShadow: `0 0 16px ${theme.colors.green['400']}`
          }}
          borderRadius="full"
          pos="absolute"
          top={`calc(100% - ${theme.space['6']})`}
          mt="0 !important"
          onClick={handleGenerateNewAdvice}
          isLoading={isLoading || isFetching}
        />
      </VStack>
    </>
  )
}