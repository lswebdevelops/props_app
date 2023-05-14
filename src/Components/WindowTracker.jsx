import React from "react";

function WindowTracker() {
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
      <h1>Window width: {windowWidth}</h1>
      <h1>Window height: {windowHeight}</h1>
    </div>
  );
}

export default WindowTracker;
