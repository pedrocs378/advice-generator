import axios from 'axios'

export const adviceApi = axios.create({
  baseURL: 'https://api.adviceslip.com',
})
