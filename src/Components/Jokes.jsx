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
      {props.setup && <h3>{props.setup}</h3>}
      <div>
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggleShown}>
          {isShown ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Jokes;
