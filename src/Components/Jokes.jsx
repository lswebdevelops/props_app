import '../Styles/Jokes.css';
import React from 'react';

function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
   
    setIsShown(prevShown => !prevShown)
  }

  return (
    <div>
      <h3>{props.setup}</h3>
      <div>
        <button onClick={toggleShown}>Show punchline</button>
        {isShown && <p>{props.punchline}</p>}
      </div>
    </div>
  );
}

export default Jokes;
