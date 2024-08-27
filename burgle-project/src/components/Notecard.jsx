// import { useState } from "react" 
import BurgerButtons from "./BurgerButtons"
import Todo from "./Todo"
import '../index.css'

function Notecard({ message, visible }) {

  const createNewNoteCard = () => {

  }

  return (
    <div className="notecard" style={{ visibility: `${visible}` }}>
      <h1>{message}</h1>
      {/*<ul>
     <li>to-do item will come from input of json server</li>
    </ul> */}
      <Todo />
    </div>
  )
}

export default Notecard