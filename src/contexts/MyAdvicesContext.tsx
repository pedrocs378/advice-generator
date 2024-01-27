import { createContext, useCallback, useContext, useMemo } from 'react'
import { toast } from 'sonner'

import { useLocalStorage } from '../hooks/use-local-storage'

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

  const addNewAdvice = useCallback(
    (newAdvice: SavedAdvice) => {
      const isAlreadySaved = myAdvices.some((advice) => {
        return advice.id === newAdvice.id
      })

      if (isAlreadySaved) {
        toast.error('This advice is already saved')

        return
      }

      setMyAdvices((advices) => [...advices, newAdvice])

      toast.success(`#${newAdvice.id} Saved`)
    },
    [myAdvices, setMyAdvices],
  )

  const removeAdvice = useCallback(
    (adviceId: number) => {
      setMyAdvices((advices) => {
        return advices.filter((advice) => advice.id !== adviceId)
      })

      toast.success(`#${adviceId} Removed`)
    },
    [setMyAdvices],
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
