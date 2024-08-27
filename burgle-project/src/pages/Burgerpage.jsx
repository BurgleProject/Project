import BurgerButtons from '../components/BurgerButtons'

import Notecard from '../components/Notecard'
import Additems from '../components/Additems'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Spoons from '../components/Spoons'
import QuoteDisplay from '../components/QuoteDisplay'
import Newburger from '../components/Newburger'

function BurgerPage() {
    const [message, setMessage] = useState('')
    const [visible, setVisibility] = useState('hidden')
    return (
        <>
            {/* navigation at the top */}
            <section className='navigation'>
                <Navbar />
            </section>

            {/*  quote space small before burger screen/area of the website */}
            <section className='quote-space'>
                <section className="quotesection">
                    <QuoteDisplay />
                </section>
            </section>

            {/* burger components section */}
            <div id='burger-component-container'>
                <div className='sidebar'>
                    <Additems />
                    <Spoons />
                    <Newburger/>
                </div>
                <section className='burgersection'>
                    <BurgerButtons setMessage={setMessage} setVisibility={setVisibility} />
                    <Notecard message={message} visible={visible} />
                </section>

            </div>
        </>
    )
}
// import QuoteOTD from '../components/Quotes/quote'




export default BurgerPage