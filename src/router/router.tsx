import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { AppTemplate } from '../templates/app-template'

import { Home } from '../pages/home'
import { MyAdvices } from '../pages/my-advices'

const routes = createRoutesFromElements(
  <Route element={<AppTemplate />}>
    <Route path="/" element={<Home />} />
    <Route path="/my-advices" element={<MyAdvices />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
