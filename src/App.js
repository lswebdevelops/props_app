import "./App.css";
import React from "react";
import { TbDeviceMobileMessage } from "react-icons/tb";
import WindowTracker from "./Components/WindowTracker";

function App() {
  const [show, setShow] = React.useState(true);
  
  
  function toggleWindowTracker(){
   setShow(prevState => !prevState)
   console.log(show);
}
return(
  <div>
   <button
   onClick={toggleWindowTracker}
   >
    Toggle WindowTracker
   </button>
    {show && <WindowTracker />}
  </div>
)
}

export default App;
