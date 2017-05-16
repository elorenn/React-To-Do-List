import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    return (
			<button onClick={ () => this.updateCount() }>
	        {this.state.count} pollito
	    </button>
	  );
  }
}

export default Button;