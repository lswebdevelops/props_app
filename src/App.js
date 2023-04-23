import './App.css';
import React from "react";
import Jokes from './Components/Jokes';

function App(){
  return(
    <div>
      <Jokes
      setup="I got my daughter a fridge for her birthday" 
      punchline="I can't wait to see her face light up when she opens it."
      />
      <Jokes
      setup="How did the hacker escape the police?" 
      punchline="He ransomwared himself."
      />
        <Jokes
      setup="Why don't pirates travel on mountain roads?" 
      punchline="Because they prefer to take the high seas."
      />
      
      <Jokes
      setup="Why do bees stay in the hive in the winter?" 
      punchline="It's too cold to go outside and pollen-tate."
      />

        <Jokes
      setup="What's the best hing about Switzerland?" 
      punchline="I don't know, but the flag is a big plus."
      />
    </div>
  )
}

export default App;