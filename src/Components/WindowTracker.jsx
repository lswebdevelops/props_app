import React from "react";

function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    function watchWindow() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", watchWindow);

    return function () {
      window.removeEventListener("resize", watchWindow);
    };
  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
      <h1>Window heigth: {windowHeight}</h1>
    </div>
  );
}

export default WindowTracker;
