import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Cocktail, {loader as cocktailLoader} from './pages/Cocktail'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: '/cocktail/:cocktailId', element: <Cocktail />, loader: cocktailLoader },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
