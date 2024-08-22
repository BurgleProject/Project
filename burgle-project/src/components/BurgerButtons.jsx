import '../index.css'


function BurgerButtons(){
  const handleClick = () => {
    console.log('hi')
  }
 return (
 <div>
   <button id = 'burger' onClick={handleClick}>Wake Up Routine!</button>
   <button id = 'burger'onClick={handleClick}>Big Focus!</button>
   <button id = 'burger'onClick={handleClick}>Relax!</button>
   <button id = 'burger'onClick={handleClick}>Reflect!</button>
   <button id = 'burger'onClick={handleClick}>Sleep!</button>
 </div>
)
}

export default BurgerButtons