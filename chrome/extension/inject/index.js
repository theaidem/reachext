import { render } from 'react-dom'
import React from 'react'
import Root from './Root'

import './styles.css'

window.addEventListener('load', () => {
  chrome.storage.local.get(null, (store) => {
    const injectDOM = document.createElement('div')
    injectDOM.className = 'inject-react-example'
    document.body.appendChild(injectDOM)
    render(<Root { ...store }/>, injectDOM)
  })
})
