import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuoteProvider from './context/QuotesProvider.jsx'
import ButtonProvider from './context/ButtonProvider.jsx'
import SpoonProvider from './context/SpoonProvider.jsx'

createRoot(document.getElementById('root')).render(
<SpoonProvider>
   <ButtonProvider>
    <QuoteProvider>
        <App />
    </QuoteProvider>
  </ButtonProvider>
</SpoonProvider>
)
