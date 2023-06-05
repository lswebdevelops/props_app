import React from "react";
import Counter from './Components/Counter'
import Here from "./Components/Here";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Counter setCount={setCount} />
      <Here count={count} />
    </div>
  );
};

export default App;
