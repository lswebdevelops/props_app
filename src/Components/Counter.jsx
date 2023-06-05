import React from "react";

const Counter = ({ setCount }) => {
  function countUp() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div onClick={countUp} className="counter-div">
      Click me to increment count
    </div>
  );
};

export default Counter;
