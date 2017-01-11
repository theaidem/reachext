import React, { Component } from 'react'
import { render } from 'react-dom'

class InjectApp extends Component {

  constructor(props) {
    super(props)
    this.state = { count: props.count || 0 }
  }

  componentDidMount() {
    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.setState({ count: changes.count.newValue })
    })
  }

  decrement = () => {
    chrome.storage.local.set({ count: this.state.count - 1 })
  }

  reset = () => {
    chrome.storage.local.set({ count: 0 })
  }

  increment = () => {
    chrome.storage.local.set({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>{ this.state.count }</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

window.addEventListener('load', () => {

  chrome.storage.local.get(null, (store) => {
    const injectDOM = document.createElement('div')
    injectDOM.className = 'inject-react-example'
    injectDOM.style.textAlign = 'center'
    document.body.appendChild(injectDOM)
    render(<InjectApp { ...store }/>, injectDOM)
  })

})
