
import React from 'react';
import '../Styles/Box.css';

function Box(props){
 
  const styles={
    backgroundColor: props.on? "#555555": "transparent"
  }

 return(
    <div 
      style={styles}
      className="box"
      onClick={props.handleToggle}

      >{props.emoji}</div>
  )
        }
        
 export default Box;