import "./App.css";
import React from "react";
import { TbDeviceMobileMessage } from "react-icons/tb";

function App() {
 const [messages, setMessages] = React.useState(["this is one message"])


return(
  <div>
    {
      messages.length === 0 ? 
      null:
      <h1> <TbDeviceMobileMessage/> You have {messages.length} {messages.length === 1? "message": "messages"}!</h1>
    }
  </div>
)
}

export default App;
