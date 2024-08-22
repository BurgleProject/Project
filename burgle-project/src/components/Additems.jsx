import '../index.css'
import { useState } from 'react'

function Additems({setMessage,setVisibility}){
 

 const handleclick = (id) => {
   return (
    <div>
     <button className = 'burger' onClick={()=> {
     setVisibility('visible')
     setMessage(`${id}`)
   }}>
    `${id}`
   </button>
    </div>
   )
  }
 return(
  <div className = 'sidebar' id = 'item-box'>
   <h1>Add Items!</h1>
   <ul>
    <li id = 'pickles'>
     <button onClick={handleclick('pickles')}>Pickles</button>
     <p>Add Pickles (Social)</p>
    </li>
    <li id = 'lettuce'>
     <button onClick={handleclick('lettuce')}>Lettuce</button>
     <p>Add Lettuce (Hygiene)</p>
    </li>
    <li id = 'Tomato'>
     <button onClick={handleclick('tomato')}>Tomato</button>
     <p>Add Tomato (Treat)</p>
    </li>
   </ul>
  </div>
 )
}

export default Additems