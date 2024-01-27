import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import { Container } from './components/Container'

const TABS = [
  {
    key: 'home',
    label: 'Advice',
    href: '/',
  },
  {
    key: 'my-advices',
    label: 'My Advices',
    href: '/my-advices',
  },
]

export function AppTemplate(): JSX.Element {
  const [index, setIndex] = useState(0)

  return (
    <Container>
      <Tabs w="100%" maxW="540px" isFitted index={index} onChange={setIndex}>
        <TabList>
          {TABS.map((tab) => {
            return (
              <Tab key={tab.key} as={NavLink} to={tab.href}>
                {tab.label}
              </Tab>
            )
          })}
        </TabList>

        <TabPanels>
          {TABS.map((tab) => {
            return (
              <TabPanel key={tab.key}>
                <Outlet />
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>
    </Container>
  )
}
