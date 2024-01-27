import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Container } from './components/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function AppTemplate(): JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Container>
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
    </Container>
  )
}
