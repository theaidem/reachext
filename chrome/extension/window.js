import React, { Component } from 'react';
import { render } from 'react-dom';

class WindowApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Window!
      </div>
    );
  }
}

window.addEventListener('load', () => {
  render(<WindowApp />, document.querySelector('#root'));
});
