import {
  IconButton,
  Text,
  VStack,
  Skeleton,
  useColorModeValue,
  Alert,
  AlertIcon,
  theme,
  IconButtonProps,
  Flex,
  useBreakpointValue,
  useToast
} from '@chakra-ui/react'
import { MdSave } from 'react-icons/md'
import { useMyAdvices } from '../contexts/MyAdvicesContext'

import { useApiGenerateAdvice } from '../hooks/use-api-generate-advice'

import { DiceIcon } from './DiceIcon'
import { Divider } from './Divider'

type ActionIconButtonProps = IconButtonProps & {
  highlightColor?: string
}

function ActionIconButton({ highlightColor, ...rest }: ActionIconButtonProps) {
  return (
    <IconButton
      height={['14', '12']}
      minW={['14', '12']}
      color="blue.900"
      bg={highlightColor}
      borderRadius="full"
      _active={{
        filter: 'brightness(0.9)',
        background: highlightColor
      }}
      _hover={{
        boxShadow: `0 0 16px ${theme.colors.green[400]}`,
        background: highlightColor
      }}
      {...rest}
    />
  )
}

export function AdviceCard() {
  const bgCard = useColorModeValue('white', 'blue.500')
  const colorCard = useColorModeValue('blue.900', 'cyan.200')
  const highlightColor = useColorModeValue('green.600', 'green.500')
  const boxShadow = useColorModeValue('md', 'xl')
  const saveIconSize = useBreakpointValue({
    base: theme.sizes[6],
    md: theme.sizes[4]
  })

  const {
    data: adviceData,
    isLoading,
    isFetching,
    error,
    refetch
  } = useApiGenerateAdvice()
  const { addNewAdvice } = useMyAdvices()
  const toast = useToast()

  const handleGenerateNewAdvice = async () => {
    await refetch()
  }
  const handleSaveCurrentAdvice = () => {
    if (!adviceData) {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Some error ocurred! Please refresh the page.',
        duration: 5000,
        isClosable: true
      })
      return
    }

    addNewAdvice({
      id: adviceData.slip.id,
      content: adviceData.slip.advice
    })
  }

  return (
    <>
      {error && (
        <Alert status="error" variant="solid" mb="4" borderRadius="md" maxW="540px">
          <AlertIcon />
          Oops! Some error ocurred
        </Alert>
      )}
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
        <Skeleton
          fadeDuration={1}
          isLoaded={!isLoading}
        >
          <Text
            color={highlightColor}
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

        <Flex
          pos="absolute"
          top={`calc(100% - ${theme.space[6]})`}
          mt="0 !important"
          align="center"
          gap="4"
        >
          <ActionIconButton
            icon={<DiceIcon />}
            aria-label="Dice"
            highlightColor={highlightColor}
            onClick={handleGenerateNewAdvice}
            isLoading={isLoading || isFetching}
          />
          <ActionIconButton
            icon={<MdSave size={saveIconSize} />}
            aria-label="Save"
            highlightColor={highlightColor}
            onClick={handleSaveCurrentAdvice}
          />
        </Flex>
      </VStack>
    </>
  )
}