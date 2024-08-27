import '../index.css'
import { useState, useContext } from 'react'
import SpoonContext from '../context/SpoonContext'

function Spoons(){
 const {spoons, setSpoons} = useContext(SpoonContext)
 const addSpoons = (spoon) => {
  const spoonLabel = prompt("Enter how many spoons")

  const spoonCount = parseInt(spoonLabel, 10)
  if (isNaN(spoonCount)) {
    alert('Invalid input. Please enter a valid number.')
    return;
  }

  setSpoons(prevSpoons => {
    const updatedSpoons = [...prevSpoons]
    if(spoonCount > 0){
      for (let i = 0; i < spoonCount; i++) {
      updatedSpoons.push(spoon)
     }
    }
    if(spoonCount < 0){
     for (let i = 0; i < Math.abs(spoonCount); i++) {
     updatedSpoons.pop()
    }
   }
    return updatedSpoons
  })
}

 return(
  <div className = 'sidebar' id = 'spoon-box'>
   <h1>Add Spoons!</h1>
   <ul>
    <li id = 'spoons'>
     <button onClick={() => addSpoons('Spoons')}>Spoon</button>
     <p>Add Spoons!</p>  
     </li>   
   </ul>
   <div id = 'spoon-container'>
        {spoons.map((spoon, index) => (
          <p key={index} id='spoon'>
            {spoon} {index + 1}
          </p>
        ))}
      </div>
  </div>
 )}


export default Spoons