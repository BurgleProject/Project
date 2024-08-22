import { useState } from "react" 
import BurgerButtons from "./BurgerButtons"
import '../index.css' 

function Notecard({message, visible}){
return (
  <div className = 'notecard' style={{visibility: `${visible}`}}>
   <h1>{message}</h1>
    <ul>
     <li>to-do item will come from input of json server</li>
    </ul>
  </div>
 )
}

export default Notecard