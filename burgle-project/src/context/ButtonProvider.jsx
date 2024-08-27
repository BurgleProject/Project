import ButtonContext from "./ButtonContext"
import { useState } from "react"

const ButtonProvider = ({children}) => {
 const [buttons, setButtons] = useState([
  { label: 'Wake Up Routine!', id: 'Wake Up Routine!' },
  { label: 'Big Focus!', id: 'Big Focus!' },
  { label: 'Relax!', id: 'Relax!' },
  { label: 'Reflect!', id: 'Reflect!' },
  { label: 'Night Night Routine!', id: 'Night Night Routine!' },
 ])

 let contextValues = {
  buttons,
  setButtons
 }

 return (
 <ButtonContext.Provider value={contextValues}>
  {children}
 </ButtonContext.Provider>
 )
}

export default ButtonProvider