
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
// using  Destructuring 
  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}
// it was like : 
// render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.props.onButtonClicked}>Click Me!</button>
//       </div>
//     );
//   }
// }

export default MyComponent;