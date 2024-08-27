import '../index.css'
import { useState, useContext } from 'react'
import BurgerButtons from './BurgerButtons'
import ButtonContext from '../context/ButtonContext'

function Additems({setMessage,setVisibility}){
 const {buttons, setButtons} = useContext(ButtonContext)
 const lastButton = buttons[buttons.length-1]

  const addNewButton = ({key}) => {
    const newButtonLabel = `${key}`
    const newButton = { label: newButtonLabel, id: newButtonLabel }
    buttons.pop()
    setButtons([...buttons, newButton, lastButton]);
  }
  
 return(
  <div className = 'sidebar' id = 'item-box'>
   <h1>Add Items!</h1>
   <ul>
    <li id = 'pickles'>
     <button onClick={() => addNewButton({ key: "Pickles!"})}>Pickles</button>
     <p>Add Pickles (Social)</p>
    </li>
    <li id = 'lettuce'>
     <button onClick={() => addNewButton({ key: "Lettuce!"})}>Lettuce</button>
     <p>Add Lettuce (Hygiene)</p>
    </li>
    <li id = 'Tomato'>
     <button onClick={() => addNewButton({ key: "Tomato!"})}>Tomato</button>
     <p>Add Tomato (Do Now!)</p>
    </li>
   </ul>
  </div>
 )
}

export default Additems