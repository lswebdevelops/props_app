import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  let hour = hours + ":" + minutes;
  let timeOfDay = "";
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div>
      <h1>It's {hour}</h1>
      <h2>Good {timeOfDay}!</h2>
    </div>
  );
}

export default MyComponent;
