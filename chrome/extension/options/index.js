import React from 'react'
import { render } from 'react-dom'
import Root from './Root'

window.addEventListener('load', () => {
  chrome.storage.local.get(null, (store) => {
    render(<Root { ...store } />, document.querySelector('#root'))
  })
})
