import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import { Container } from './components/Container'

type ActiveProps = {
  isActive: boolean
}

type TabTextProps = ActiveProps & {
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
  children?: React.ReactNode
}

function TabText({
  isActive,
  index,
  setIndex,
  children
}: TabTextProps): JSX.Element {
  useEffect(() => {
    if (isActive) {
      setIndex(index)
    }
  }, [index, isActive, setIndex])

  return <>{children}</>
}

const TABS = [
  {
    key: 'home',
    label: 'Advice',
    href: '/'
  },
  {
    key: 'my-advices',
    label: 'My Advices',
    href: '/my-advices'
  }
]

export function AppTemplate(): JSX.Element {
  const [index, setIndex] = useState(0)

  return (
    <Container>
      <Tabs w="100%" maxW="540px" isFitted index={index}>
        <TabList>
          {TABS.map((tab, index) => {
            return (
              <Tab key={tab.key} as={NavLink} to={tab.href}>
                {({ isActive }: ActiveProps) => (
                  <TabText
                    isActive={isActive}
                    index={index}
                    setIndex={setIndex}
                  >
                    {tab.label}
                  </TabText>
                )}
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
