import './App.css';
import React from "react";
import boxes from './Components/Boxes';

function App(){
 
 const [squares, setSquares] = React.useState(boxes);

 const styles = {
  backgroundColor: "beige"
 }
  const boxElements = boxes.map(item =>(
    <div 
    style={styles}
    className='box'
    key={item.id}
    > </div>

  )

 )

  return(
    <div>
       {boxElements}
       </div>
    )
}
export default App;