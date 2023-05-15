import "./App.css";
import React from "react";
import WindowTracker from "./Components/WindowTracker";

function App() {
  const [show, setShow] = React.useState(true);

  function toggleWindowTracker() {
    setShow((prevState) => !prevState);
    console.log(show);
  }
  return (
    <div>
      <button onClick={toggleWindowTracker}>Tracker</button>
      {show && <WindowTracker /> }
    </div>
  );
}

export default App;
