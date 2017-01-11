import React, { Component } from 'react';
import { render } from 'react-dom';

class OptionsApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Options page!
      </div>
    );
  }
}

window.addEventListener('load', () => {
  render(<OptionsApp />, document.querySelector('#root'));
});
