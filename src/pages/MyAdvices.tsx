import { useState } from 'react'
import { theme, IconButton, Tooltip } from '@chakra-ui/react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'
import { BsEmojiFrown } from 'react-icons/bs'

import { useMyAdvices } from '../contexts/MyAdvicesContext'

import { AdviceCard } from '../components/AdviceCard'

export function MyAdvices(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { myAdvices, removeAdvice } = useMyAdvices()

  function handleChangeAdviceIndex(direction: 'back' | 'forward'): void {
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

  function handleRemoveAdvice(adviceId: number): void {
    removeAdvice(adviceId)

    if (currentIndex === myAdvices.length - 1) {
      handleChangeAdviceIndex('back')
    }
  }

  return (
    <AdviceCard
      hasErrors={!myAdvices.length}
      errorMessage={
        <>
          No advice saved yet. <BsEmojiFrown size={18} />
        </>
      }
      adviceId={myAdvices[currentIndex]?.id}
      adviceContent={myAdvices[currentIndex]?.content}
    >
      {currentIndex > 0 && (
        <IconButton
          icon={<MdOutlineArrowBackIos />}
          aria-label="Arrow left"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          right={`calc(100% - ${theme.sizes[5]})`}
          colorScheme="blue"
          m="0 !important"
          onClick={() => handleChangeAdviceIndex('back')}
        />
      )}

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

      <Tooltip label="Remove">
        <IconButton
          icon={<IoMdTrash size={20} />}
          aria-label="Trash"
          position="absolute"
          top="3"
          right="3"
          colorScheme="red"
          variant="ghost"
          m="0 !important"
          onClick={() => handleRemoveAdvice(myAdvices[currentIndex].id)}
        />
      </Tooltip>
    </AdviceCard>
  )
}
