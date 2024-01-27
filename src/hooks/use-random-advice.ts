import { useQuery } from '@tanstack/react-query'

import { getRandomAdvice } from '@/api/get-random-advice'

export const useRandomAdvice = () => {
  const {
    data: advice,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['random-advice'],
    queryFn: getRandomAdvice,
  })

  return { advice, isFetching, error }
}
