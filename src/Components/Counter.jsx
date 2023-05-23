import React from "react";

class Counter extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            counter: 0
        };
        this.increment = () => this.setState({ counter: this.state.counter + 1 });
        this.decrement = () => this.setState({ counter: this.state.counter - 1 });
    }

    componentDidMount() {
        console.log('Component did mount');
        console.log("----------------------------");
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <p>Counter: {this.state.counter}</p>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component did update");
        console.log("----------------------------");
    }
}

export default Counter;
