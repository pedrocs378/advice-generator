import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { MyAdvicesProvider } from './contexts/MyAdvicesContext'

import { Router } from './Router'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MyAdvicesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MyAdvicesProvider>
    </QueryClientProvider>
  )
}

export { App }
