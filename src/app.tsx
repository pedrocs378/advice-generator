import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from './lib/react-query'

import { router } from './router/router'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />

        <Toaster richColors position="top-right" />
      </ThemeProvider>

      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}
