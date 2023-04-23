import '../Styles/Jokes.css';
import React from 'react';

class Jokes extends React.Component{
  render(){
   
    const { setup, punchline} = this.props;
    return(
      <div>
        {/* if setup exists, so is truffy */}
        {setup && <h1 
        style={{display: setup ? "block": "none"}}>{setup}</h1>}
        {punchline && <p
         style={{display:punchline ? "block": "none"}}>{punchline}</p>}
         <hr />
      </div>
    )
  }
}
export default Jokes;