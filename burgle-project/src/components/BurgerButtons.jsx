import '../index.css'
import { useState } from 'react'


function BurgerButtons({ setMessage, setVisibility }){
 return (
 <div id = 'burger-box'>
   <button className = 'burger' onClick={()=> {
    setVisibility('visible')
    setMessage('Wake Up Routine!')
   }}>
    Wake Up Routine!
   </button>

   <button className = 'burger'onClick={()=> {
    setVisibility('visible')
    setMessage('Big Focus!')
   }}>
    Big Focus!
    </button>
    <button className = 'burger'onClick={()=> {
    setVisibility('visible')
    setMessage('Relax!')
   }}>
    Relax!
    </button>
    <button className = 'burger'onClick={()=> {
    setVisibility('visible')
    setMessage('Reflect!')
   }}>
    Reflect!
    </button>
    <button className = 'burger' id = 'last-item' onClick={()=> {
    setMessage('Sleep!')
   }}>
    Sleep!
    </button>
 </div>
)
}

export default BurgerButtons