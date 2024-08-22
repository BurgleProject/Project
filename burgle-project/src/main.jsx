import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuoteProvider from './context/QuotesProvider.jsx'

createRoot(document.getElementById('root')).render(


    <QuoteProvider>
        <App />
    </QuoteProvider>


)
