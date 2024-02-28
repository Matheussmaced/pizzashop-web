import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SingIn } from './pages/auth/sign-in'

export const route = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },

  {
    path: 'sing-in',
    element: <AuthLayout />,
    children: [{ path: '/sing-in', element: <SingIn /> }],
  },
])
