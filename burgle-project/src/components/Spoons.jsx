import '../index.css'
import { useState } from 'react'

function Spoons(){
 return(
  <div className = 'sidebar' id = 'spoon-box'>
   <h1>Add Spoons!</h1>
   <ul>
    <li id = 'spoons'>
     <button>Spoon</button>
     <p>Add Spoons!</p>
    </li>
   </ul>
  </div>
 )
}

export default Spoons