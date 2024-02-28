import './global.css'

import { RouterProvider } from 'react-router-dom'

import { route } from './routes'

function App() {
  return <RouterProvider router={route} />
}

export default App
