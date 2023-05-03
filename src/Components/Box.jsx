import boxes from '../Data/dataBoxes';
import React from 'react';
import '../Styles/Box.css';

function Box(props){
  const [on, setOn]= React.useState(props.on);

  const styles={
    backgroundColor: on? "#222222": "transparent"
  }
  function toggleBackground(){
    setOn(prevOn=> !prevOn)
  }
  return(
    <div 
      style={styles}
      className="box"
      onClick={toggleBackground}
      >{props.emoji}</div>
  )
        }
        
 export default Box;