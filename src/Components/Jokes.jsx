import "../Styles/Jokes.css";
import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      <h3>{props.setup}</h3>
      <div>
        <button onClick={toggleShown}>
          {isShown ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        {isShown && <p>{props.punchline}</p>}
      </div>
    </div>
  );
}

export default Jokes;
