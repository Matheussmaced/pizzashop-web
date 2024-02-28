import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/dashboard'
import { SingIn } from './pages/auth/sign-in'

export const route = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sing-in', element: <SingIn /> },
])
