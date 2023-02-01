import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Cocktail from './pages/Cocktail'
import RootLayout from './pages/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: '/cocktail/:cocktailId', element: <Cocktail /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
