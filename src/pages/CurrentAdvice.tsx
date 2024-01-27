import { forwardRef } from 'react'
import {
  IconButton,
  useColorModeValue,
  Alert,
  AlertIcon,
  theme,
  type IconButtonProps,
  Flex,
  useBreakpointValue,
  useToast,
  Tooltip,
} from '@chakra-ui/react'
import { MdSave } from 'react-icons/md'

import { useMyAdvices } from '../contexts/MyAdvicesContext'

import { useApiGenerateAdvice } from '../hooks/use-api-generate-advice'

import { AdviceCard } from '../components/AdviceCard'
import { DiceIcon } from '../components/DiceIcon'

type ActionIconButtonProps = IconButtonProps & {
  highlightColor?: string
}

const ActionIconButton = forwardRef<HTMLButtonElement, ActionIconButtonProps>(
  ({ highlightColor, ...rest }, ref) => {
    return (
      <IconButton
        ref={ref}
        height={['14', '12']}
        minW={['14', '12']}
        color="blue.900"
        bg={highlightColor}
        borderRadius="full"
        _active={{
          filter: 'brightness(0.9)',
          background: highlightColor,
        }}
        _hover={{
          boxShadow: `0 0 16px ${theme.colors.green[400]}`,
          background: highlightColor,
        }}
        {...rest}
      />
    )
  },
)
ActionIconButton.displayName = 'ActionIconButton'

export function CurrentAdvice(): JSX.Element {
  const highlightColor = useColorModeValue('green.600', 'green.500')
  const saveIconSize = useBreakpointValue({
    base: theme.sizes[6],
    md: theme.sizes[5],
  })

  const {
    data: adviceData,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useApiGenerateAdvice()
  const { addNewAdvice } = useMyAdvices()
  const toast = useToast()

  const handleGenerateNewAdvice = async (): Promise<void> => {
    await refetch()
  }
  const handleSaveCurrentAdvice = (): void => {
    if (!adviceData) {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Some error ocurred! Please refresh the page.',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    addNewAdvice({
      id: adviceData.slip.id,
      content: adviceData.slip.advice,
    })
  }

  return (
    <>
      {error && (
        <Alert
          status="error"
          variant="solid"
          mb="4"
          borderRadius="md"
          maxW="540px"
        >
          <AlertIcon />
          Oops! Some error ocurred
        </Alert>
      )}

      <AdviceCard
        adviceId={adviceData?.slip.id}
        adviceContent={adviceData?.slip.advice}
        isLoading={isLoading}
      >
        <Flex
          pos="absolute"
          top={`calc(100% - ${theme.space[6]})`}
          mt="0 !important"
          align="center"
          gap="4"
        >
          <Tooltip label="Roll">
            <ActionIconButton
              icon={<DiceIcon />}
              aria-label="Dice"
              highlightColor={highlightColor}
              isLoading={isLoading || isFetching}
              onClick={handleGenerateNewAdvice}
            />
          </Tooltip>
          <Tooltip label="Save">
            <ActionIconButton
              icon={<MdSave size={saveIconSize} />}
              aria-label="Save"
              highlightColor={highlightColor}
              isDisabled={!!error || isLoading || isFetching}
              onClick={handleSaveCurrentAdvice}
            />
          </Tooltip>
        </Flex>
      </AdviceCard>
    </>
  )
}
