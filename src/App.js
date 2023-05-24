import React, {useState, useEffect} from "react";


const App = () => {
  const [ color, setColor ] = useState('black');
  useEffect(() => {
    const chageColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      }else{
        setColor("black");
      }
    };

    document.addEventListener("click", chageColorOnClick);
    return() => {
      document.removeEventListener( "click", chageColorOnClick);
    };
  }, [color]);
  return(
    <div>
      <div
      id="myDiv"
      style={{
        color: "white",
        width: "100px",
        height: "100px",
        position: "absolute",
        left: "50%",
        top: "50%",
        backgroundColor: color,

      }}
      >
        This div can change color. If you click on it! 
      </div>
    </div>
  )
}

export default App;