import './App.css';
import React from "react";
import Jokes from './Components/Jokes';
import jokesData from './Data/jokesData';

function App() {
  const jokeElements = jokesData.map(joke => {
   
    return (
      <Jokes
        setup={joke.setup} 
        key={joke.id}
        punchline={joke.punchline}
      
      />
    );
  });

  return (
    <div>
      {jokeElements}
    </div>
  );
}

export default App;
