import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuoteProvider from './context/QuotesProvider.jsx'
import ButtonProvider from './context/ButtonProvider.jsx'

createRoot(document.getElementById('root')).render(

  <ButtonProvider>
    <QuoteProvider>
        <App />
    </QuoteProvider>
  </ButtonProvider>
    


)
