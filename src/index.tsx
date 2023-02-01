import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CocktailsContextProvider } from './store/CocktailsContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <CocktailsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CocktailsContextProvider>
)
