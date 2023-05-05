import boxes from '../Data/dataBoxes';
import React from 'react';
import '../Styles/Box.css';

function Box(props){
  const [on, setOn]= React.useState(props.on);

  const styles={
    backgroundColor: on? "#555555": "transparent"
  }

 return(
    <div 
      style={styles}
      className="box"
      onClick={() => props.handleClick(props.id)}

      >{props.emoji}</div>
  )
        }
        
 export default Box;