import React from "react";

function WindowTracker() {
  const [windowWidth, setwindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setwindowWidth(window.innerWidth);
    });
  }, []);
  return <h1>Window width: {windowWidth}</h1>;
}

export default WindowTracker;
