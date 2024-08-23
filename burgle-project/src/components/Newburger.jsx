import { useState, useContext } from "react"
import ButtonContext from '../context/ButtonContext'


function Newburger(){
 const {buttons, setButtons} = useContext(ButtonContext)
 const resetButtons = () => {
  setButtons([
   { label: 'Wake Up Routine!', id: 'Wake Up Routine!' },
   { label: 'Big Focus!', id: 'Big Focus!' },
   { label: 'Relax!', id: 'Relax!' },
   { label: 'Reflect!', id: 'Reflect!' },
   { label: 'Sleep!', id: 'Sleep!' },
  ])
 }
 return(
  <button id = 'newburger' onClick={() => resetButtons()}>New Burger</button>
 )
}

export default Newburger