import React from "react";

function WindowTracker() {
  const [windowWidth, setwindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
        // console.log("Setting up...");
      setwindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return function () {
    //   console.log("cleaning up!!");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return <h1>Window width: {windowWidth}</h1>;
}

export default WindowTracker;
