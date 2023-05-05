
import './App.css';
import React from "react";
import Box from './Components/Box';
import boxes from './Data/dataBoxes';

function App(){
  const [squares, setSquares] = React.useState(boxes);
  const squaresElements = squares.map(square =>(
    <Box
    key={square.id}
    id={square.id}
    on={square.on}
    emoji={square.emoji}
    handleClick={toggle}
    />
  ))
  function toggle(id){
    console.log(id);
    }
  return(
    <div >

      {squaresElements}
    </div>
    )
}
export default App;