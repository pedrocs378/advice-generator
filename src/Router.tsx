import { Route, Routes } from 'react-router-dom'

import { AppTemplate } from './templates/AppTemplate'

import { CurrentAdvice } from './pages/CurrentAdvice'
import { MyAdvices } from './pages/MyAdvices'

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<AppTemplate />}>
        <Route index element={<CurrentAdvice />} />
        <Route path="/my-advices" element={<MyAdvices />} />
      </Route>
    </Routes>
  )
}
