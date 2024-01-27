import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { adviceApi } from '../services/adviceApi'

type Advice = {
  slip: {
    id: number
    advice: string
  }
}

export const useApiGenerateAdvice = (): UseQueryResult<Advice> => {
  return useQuery({
    queryKey: ['generatedAdvice'],
    queryFn: async () => {
      const response = await adviceApi.get<Advice>('/advice')

      return response.data
    },
  })
}
