
import './App.css';
import React from "react";
import Box from './Components/Box';
import boxes from './Data/dataBoxes';

function App(){
  const [squares, setSquares] = React.useState(boxes);
 
  function toggle(id){
    setSquares(prevStatus =>{
      return prevStatus.map((square) =>{
      return square.id === id ? {...square, on: !square.on}: square
      })
    })      
  }

  const squaresElements = squares.map(square =>(
    <Box
    key={square.id}
    on={square.on}
    emoji={square.emoji}
    handleToggle={() =>toggle(square.id)}
    />
  ))

  return(
    <div >

      {squaresElements}
    </div>
    )
}
export default App;