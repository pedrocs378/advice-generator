import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function AppTemplate() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-col min-h-screen">
      <ThemeToggle />

      <main className="flex-1 flex flex-co items-center justify-center px-4">
        <Tabs
          className="w-full max-w-[540px]"
          value={location.pathname}
          onValueChange={(path) => navigate(path)}
        >
          <TabsList className="w-full">
            <TabsTrigger className="flex-1" value="/">
              Advice
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="/my-advices">
              My advices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="/">
            <Outlet />
          </TabsContent>
          <TabsContent value="/my-advices">
            <Outlet />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="h-8 flex items-center justify-center">
        <p className="text-xs">
          Desenvolvido com ❤️ por{' '}
          <a
            href="https://github.com/pedrocs378"
            rel="noreferrer noopener"
            target="_parent"
            className="text-muted-foreground font-semibold hover:underline"
          >
            Pedro César
          </a>
        </p>
      </footer>
    </div>
  )
}
