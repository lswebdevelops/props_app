import React from "react";

function WindowTracker() {
  const [show, setShow] = React.useState(true);

  function toggleWindowTracker() {
    setShow((prevState) => !prevState);
    console.log(show);
  }

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    function watchHeight() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", watchWidth);
    window.addEventListener("resize", watchHeight);
    return function () {
      window.removeEventListener("resize", watchWidth);
      window.removeEventListener("resize", watchHeight);
    };
  }, []);

  return (
    <div>
      <h1>Window width: {show && windowWidth}</h1>
      <h1>Window height: {show && windowHeight}</h1>
        <button 
            onClick={toggleWindowTracker}>
                Toggle WindowTracker
        </button>     
    </div>
  );
}

export default WindowTracker;
