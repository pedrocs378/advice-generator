import { IconButton, Image, Text, VStack, useTheme, Skeleton, useColorModeValue } from '@chakra-ui/react'

import { useApiGenerateAdvice } from '../hooks/use-api-generate-advice'

import { DiceIcon } from './DiceIcon'

import divider from '../assets/pattern-divider-desktop.svg'

export function AdviceCard() {
  const theme = useTheme()
  const bgCard = useColorModeValue('white', 'blue.500')
  const colorCard = useColorModeValue('blue.900', 'cyan.200')
  const highlighColor = useColorModeValue('green.600', 'green.500')
  const boxShadow = useColorModeValue('md', 'xl')

  const { data: adviceData, isLoading, isFetching, error, refetch } = useApiGenerateAdvice()

  const handleGenerateNewAdvice = async () => {
    await refetch()
  }

  return (
    <>
      {error && (
        <Text color="red.500" mb="4">
          Oops! ocorreu algum erro
        </Text>
      )}
      <VStack
        w="100%"
        maxW="540px"
        minH="340px"
        bg={bgCard}
        rounded="lg"
        justify="center"
        align="center"
        p="6"
        boxShadow={boxShadow}
        pos="relative"
        spacing={theme.space['8']}
      >
        <Skeleton
          fadeDuration={1}
          isLoaded={!isLoading}
        >
          <Text color={highlighColor} letterSpacing="6px" fontSize="xs" textTransform="uppercase">
            Advice {`#${adviceData?.slip.id}`}
          </Text>
        </Skeleton>

        <Skeleton
          minW="200px"
          fadeDuration={1}
          isLoaded={!isLoading}
        >
          <Text color={colorCard} maxW="95%" fontSize="3xl" textAlign="center">
            "{adviceData?.slip.advice}"
          </Text>
        </Skeleton>

        <Image src={divider} alt="Divider" />

        <IconButton
          icon={<DiceIcon />}
          aria-label="Dice"
          size="lg"
          bg={highlighColor}
          _active={{
            filter: 'brightness(0.9)',
            background: highlighColor
          }}
          _hover={{
            background: highlighColor,
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