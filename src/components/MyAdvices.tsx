import { useEffect, useState } from 'react'
import {
  Text,
  VStack,
  Skeleton,
  useColorModeValue,
  theme,
  IconButton
} from '@chakra-ui/react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { BsEmojiFrown } from 'react-icons/bs'

import { Divider } from './Divider'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useMyAdvices } from '../contexts/MyAdvicesContext'

type SavedAdvice = {
  id: number
  content: string
}

const advices: SavedAdvice[] = [
  {
    id: 162,
    content: 'Stop using the term "busy" as an excuse.'
  },
  {
    id: 223,
    content: 'Vinegar is a powerful cleaning agent.'
  },
  {
    id: 204,
    content: 'The best nights out are when people around you are simply having fun.'
  },
  {
    id: 46,
    content: "Try going commando to an important meeting, NB: don't wear a skirt."
  },
  {
    id: 199,
    content: "Be brave. Even if you're not, pretend to be. No one can tell the difference."
  },
]

export function MyAdvices() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { myAdvices } = useMyAdvices()

  const bgCard = useColorModeValue('white', 'blue.500')
  const colorCard = useColorModeValue('blue.900', 'cyan.200')
  const highlighColor = useColorModeValue('green.600', 'green.500')
  const boxShadow = useColorModeValue('md', 'xl')

  function handleChangeAdviceIndex(direction: 'back' | 'forward') {
    if (direction === 'back') {
      setCurrentIndex((index) => {
        if (index <= 0) return index

        return index - 1
      })
    } else {
      setCurrentIndex((index) => {
        if (index >= myAdvices.length - 1) return index

        return index + 1
      })
    }
  }

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
      {!myAdvices.length ? (
        <Text
          color={colorCard}
          maxW="95%"
          textAlign="center"
          display="flex"
          alignItems="center"
          gap="2"
        >
          No advice saved yet. <BsEmojiFrown size={18} />
        </Text>
      ) : (
        <>
          {currentIndex > 0 && (
            <IconButton
              icon={<MdOutlineArrowBackIos />}
              aria-label="Arrow left"
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              right={`calc(100% - ${theme.sizes[5]})`}
              colorScheme="blue"
              onClick={() => handleChangeAdviceIndex('back')}
            />
          )}

          <Skeleton
            m="0 !important"
            fadeDuration={1}
            isLoaded={true}
          >
            <Text
              color={highlighColor}
              letterSpacing="6px"
              fontSize={['x-small', 'xs']}
              textTransform="uppercase"
            >
              Advice {`#${myAdvices[currentIndex].id}`}
            </Text>
          </Skeleton>

          <Skeleton
            minW="200px"
            fadeDuration={1}
            isLoaded={true}
          >
            <Text
              color={colorCard}
              maxW="95%"
              fontSize={['2xl', '3xl']}
              textAlign="center"
            >
              "{myAdvices[currentIndex].content}"
            </Text>
          </Skeleton>

          <Divider />

          {currentIndex < myAdvices.length - 1 && (
            <IconButton
              icon={<MdOutlineArrowForwardIos />}
              aria-label="Arrow right"
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              left={`calc(100% - ${theme.sizes[5]})`}
              colorScheme="blue"
              m="0 !important"
              onClick={() => handleChangeAdviceIndex('forward')}
            />
          )}
        </>
      )}
    </VStack>
  )
}