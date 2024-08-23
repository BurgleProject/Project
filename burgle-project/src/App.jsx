import { useState } from 'react'
import './App.css'
import BurgerPage from './pages/BurgerPage'
import QuoteProvider from './context/QuotesProvider'



function App() {

  console.log("HIIIIII")
  return (
    <div>
      <QuoteProvider />
      <BurgerPage />
    </div>
  )
}

export default App