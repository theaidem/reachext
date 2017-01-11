import React, { Component } from 'react';
import { render } from 'react-dom';

class PopupApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Popup!
      </div>
    );
  }
}

window.addEventListener('load', () => {
  render(<PopupApp />, document.querySelector('#root'));
});
