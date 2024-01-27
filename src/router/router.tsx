import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { AppTemplate } from '../templates/AppTemplate'

import { CurrentAdvice } from '../pages/CurrentAdvice'
import { MyAdvices } from '../pages/MyAdvices'

const routes = createRoutesFromElements(
  <Route element={<AppTemplate />}>
    <Route path="/" element={<CurrentAdvice />} />
    <Route path="/my-advices" element={<MyAdvices />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
