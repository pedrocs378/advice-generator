import { toast } from 'sonner'
import { useLocalStorage } from './use-local-storage'

type SavedAdvice = {
  id: number
  content: string
}

export function useSavedAdvices() {
  const [advices, setAdvices] = useLocalStorage<SavedAdvice[]>(
    '@advices:saved',
    [],
  )

  function saveAdvice(advice: SavedAdvice) {
    const isAlreadySaved = advices.some((saved) => {
      return saved.id === advice.id
    })

    if (isAlreadySaved) {
      toast.error('This advice is already saved')

      return
    }

    setAdvices((prev) => [...prev, advice])

    toast.success(`#${advice.id} Saved`)
  }

  function removeAdvice(adviceId: number) {
    setAdvices((advices) => advices.filter((advice) => advice.id !== adviceId))

    toast.success(`#${adviceId} Removed`)
  }

  return { advices, saveAdvice, removeAdvice }
}
