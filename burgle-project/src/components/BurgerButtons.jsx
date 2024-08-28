import '../index.css'
import { useState, useContext } from 'react'
import ButtonContext from '../context/ButtonContext'
import ListContext from '../context/ListContext'


function BurgerButtons({ setMessage, setVisibility }) {
  const { buttons, setButtons } = useContext(ButtonContext)
  const {todoLists, setTodoLists} = useContext(ListContext)

  const handleClick = (buttonId, index) => {
    setVisibility('visible');
    setMessage(buttonId);
    if (todoLists[index]) {
      setTodoLists(prevLists => {
        const updatedLists = [...prevLists]
        updatedLists[index] = todoLists[index]
        return updatedLists
      });
    }
  }

  return (
    <div id='burger-box'>
      {buttons.map((button, index) => (
        <button
          key={index}
          className='burger'
          onClick={() => {
            handleClick(button.id, index)
          }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}


export default BurgerButtons