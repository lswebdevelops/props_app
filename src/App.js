import './App.css';
import React from "react";
import Header from './Components/Header';
import Body from './Components/Body';

function App(){
const [user, setUser] = React.useState("Davi")
  return(
    <div>
       <Header
       user={user} />
       <Body
       user={user} />
    </div>
    )
}
export default App;