import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './styles/GlobalStyles'
import { GlobalProvider } from '../src/context/globalcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalProvider>
       <App />
    </GlobalProvider>
  </React.StrictMode>,
)