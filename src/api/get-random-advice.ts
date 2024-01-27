import { api } from '@/lib/axios'

type GetRandomAdviceResponse = {
  slip: {
    id: number
    advice: string
  }
}

export async function getRandomAdvice() {
  const response = await api.get<GetRandomAdviceResponse>('/advice')

  return response.data
}
