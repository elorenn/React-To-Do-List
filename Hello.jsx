import React from 'react';
import ReactDOM from 'react-dom';


class Hello extends React.Component {
  render() {
    return (
     	<div style={ {textAlign: 'left'} }>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

Hello.defaultProps = {
	name: "world",
}

export default Hello;