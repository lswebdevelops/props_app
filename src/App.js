import "./App.css";
import React from "react";


function App() {
 const [messages, setMessages] = React.useState(["a"])

  //  if(messages.length === 1){
    
  //   return(<div>
  //   <h1>{`Your have ${messages.length} unread message!`}</h1> 
  //   </div>
  //   )
  //  }else if(messages.length > 1){
  //   return (
  //     <div>
  //       <h1>{`Your have ${messages.length} unread messages!`}</h1> 

  //     </div>
  //   )

  //  }else{
  //   return null;
  //  }
  //  now using ternary: 


return(
 <div>
   {
    messages.length === 0?
    null:
    // <h1>You have {messages.length} unread message{messages.length > 1 && "s"}!</h1>
    //  a better writen/ understandable code: 
    <h1>You have {messages.length} unread 
    {messages.length > 1 ? " messages" : " message"}!</h1>
}

 </div>

)
}

export default App;
