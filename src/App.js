import React from 'react';
import './App.css';

const App = () => {
  const [count , setCount ] = React.useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count -1);
  };
  return(
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>

    </div>
  )
}
export default App;
