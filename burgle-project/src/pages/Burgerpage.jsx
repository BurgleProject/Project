import BurgerButtons from '../components/BurgerButtons'

import Notecard from '../components/Notecard'
import Additems from '../components/Additems'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Spoons from '../components/Spoons'

function BurgerPage(){
 const [message, setMessage] = useState('')
 const [visible, setVisibility] = useState('hidden')
 return(
  <>
   <Navbar/>
   <div id = 'component-container'>
    <div className = 'sidebar'>
     <Additems/>
    <Spoons/>
    </div>
   <BurgerButtons setMessage={ setMessage } setVisibility = {setVisibility}/>
   <Notecard message={message} visible = {visible} />
   </div>
  </>
 )

// import QuoteOTD from '../components/Quotes/quote'


function BurgerPage() {
    console.log("hellur")
    return (

        // <QuoteOTD />,
        <BurgerButtons />

    )

}

export default BurgerPage