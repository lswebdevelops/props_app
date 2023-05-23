import React from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unMountCounter = () => this.setState({ mount: false });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unMountCounter} disabled={!this.state.mount}>
          Unmount
        </button>

        {this.state.mount ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
