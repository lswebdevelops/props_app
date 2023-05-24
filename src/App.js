import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColor =() => {
      color === "black"? setColor("white"): setColor("black");
    }

    document.addEventListener("click", changeColor);
    return() => {
      document.removeEventListener("click", changeColor)
    }

  }, [color]);

  return(
    <div
      style={{
        textAlign: "center",
      }}>
      <div
        id="myDiv"
        style={{
          paddingTop: "30px",
          color: "white",
          paddingBottom: "0",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50px",
          top: "50px",
          // padding: "10px",
          userSelect: "none",
          color: color,
          backgroundColor: "green",
        }}
        >
        Click me for changing
      </div>
    </div>
  )


}

export default App;
