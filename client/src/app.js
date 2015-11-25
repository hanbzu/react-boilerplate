import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return <div>Hey, this is App!</div>
  }
}

render(<App />, document.getElementById('root'))
