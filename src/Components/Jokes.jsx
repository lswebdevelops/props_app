import React from 'react';
import '../Styles/Jokes.css';

class Jokes extends React.Component {
  render() {
    const { setup, punchline } = this.props;
    return (
      <div className="joke-container">
        {setup && <h1 className="joke-setup">{setup}</h1>}
        {punchline && <p className="joke-punchline">{punchline}</p>}
        <hr />
      </div>
    )
  }
}

export default Jokes;
