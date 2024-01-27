import { createContext, useCallback, useContext, useMemo } from 'react'
import { useToast } from '@chakra-ui/react'

import { useLocalStorage } from '../hooks/useLocalStorage'

type SavedAdvice = {
  id: number
  content: string
}

type MyAdvicesContextData = {
  myAdvices: SavedAdvice[]
  addNewAdvice: (newAdvice: SavedAdvice) => void
  removeAdvice: (adviceId: number) => void
}

type MyAdvicesProviderProps = {
  children?: React.ReactNode
}

const MyAdvicesContexts = createContext({} as MyAdvicesContextData)

export function MyAdvicesProvider({
  children,
}: MyAdvicesProviderProps): JSX.Element {
  const [myAdvices, setMyAdvices] = useLocalStorage<SavedAdvice[]>(
    '@advGen:myAdvices',
    [],
  )

  const toast = useToast()

  const addNewAdvice = useCallback(
    (newAdvice: SavedAdvice) => {
      const isAlreadySaved = myAdvices.some((advice) => {
        return advice.id === newAdvice.id
      })

      if (isAlreadySaved) {
        toast({
          title: 'Error',
          description: 'This advice is already saved',
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        })

        return
      }

      setMyAdvices((advices) => [...advices, newAdvice])

      toast({
        title: `#${newAdvice.id} Saved`,
        status: 'success',
        duration: 5000,
        position: 'top',
        isClosable: true,
      })
    },
    [myAdvices, toast, setMyAdvices],
  )

  const removeAdvice = useCallback(
    (adviceId: number) => {
      setMyAdvices((advices) => {
        return advices.filter((advice) => advice.id !== adviceId)
      })

      toast({
        title: `#${adviceId} Removed`,
        status: 'success',
        duration: 5000,
        position: 'top',
        isClosable: true,
      })
    },
    [toast, setMyAdvices],
  )

  const valueMemo: MyAdvicesContextData = useMemo(() => {
    return {
      myAdvices,
      addNewAdvice,
      removeAdvice,
    }
  }, [myAdvices, addNewAdvice, removeAdvice])

  return (
    <MyAdvicesContexts.Provider value={valueMemo}>
      {children}
    </MyAdvicesContexts.Provider>
  )
}

export function useMyAdvices(): MyAdvicesContextData {
  return useContext(MyAdvicesContexts)
}
