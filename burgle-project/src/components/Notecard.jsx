// import { useState } from "react" 
import '../index.css'

function Notecard({ message, visible }) {

  //import graphic for notecard into here so the list pops up on it!
  //see how to make graphic extend as tasks add on
  return (
    <div className="notecard" style={{ visibility: `${visible}` }}>
      <h1>{message}</h1>
      {/*<ul>
     <li>to-do item will come from input of json server</li>
    </ul> */}

    </div>
  )
}

export default Notecard