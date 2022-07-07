import { useQuery } from 'react-query'

import { adviceApi } from '../services/adviceApi'

type Advice = {
  slip: {
    id: number
    advice: string
  }
}

export const useApiGenerateAdvice = () => {
  return useQuery(
    'generatedAdvice',
    async () => {
      const response = await adviceApi.get<Advice>('/advice')
  
      return response.data
    },
    {
      refetchOnWindowFocus: false
    }
  )
}