import React, { Component } from 'react'

class Root extends Component {

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

export default Root
