import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from './libs/react-query'

import { MyAdvicesProvider } from './contexts/MyAdvicesContext'

import { router } from './router/router'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MyAdvicesProvider>
          <RouterProvider router={router} />

          <Toaster richColors position="top-right" />
        </MyAdvicesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
