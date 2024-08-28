import '../index.css'
import { useState, useContext } from 'react'
import ButtonContext from '../context/ButtonContext';


function BurgerButtons({ setMessage, setVisibility }) {
  const { buttons, setButtons } = useContext(ButtonContext)


  return (
    <div id='burger-box'>
      {buttons.map((button, index) => (
        <button
          key={index}
          className='burger'
          onClick={() => {
            setVisibility('visible');
            setMessage(button.id);
            
          }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}


export default BurgerButtons