import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuoteProvider from './context/QuotesProvider.jsx'
import ButtonProvider from './context/ButtonProvider.jsx'
import SpoonProvider from './context/SpoonProvider.jsx'
import ListProvider from './context/ListProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ListProvider>
    <SpoonProvider>
   <ButtonProvider>
    <QuoteProvider>
        <App />
    </QuoteProvider>
  </ButtonProvider>
</SpoonProvider>
  </ListProvider>

)
