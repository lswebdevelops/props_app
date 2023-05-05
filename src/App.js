
import './App.css';
import React from "react";
import Box from './Components/Box';
import boxes from './Data/dataBoxes';

function App(){
  const [squares, setSquares] = React.useState(boxes);
 
  function toggle(id){
    setSquares(prevSquares =>{
      const newSquares = []
      for(let i = 0; i <prevSquares.length; i++){
        const currentSquare = prevSquares[i]
        if(currentSquare.id === id){
          const updatedSquare = {
            ...currentSquare, 
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        }else{
          newSquares.push(currentSquare)
        }
      }
      
      return newSquares
    })
 
  }
  const squaresElements = squares.map(square =>(
    <Box
    key={square.id}
    id={square.id}
    on={square.on}
    emoji={square.emoji}
    handleToggle={toggle}
    />
  ))

  return(
    <div >

      {squaresElements}
    </div>
    )
}
export default App;