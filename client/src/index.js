import React, { Component } from 'react'
import { render } from 'react-dom'
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hey, this is App!</h1>
        <Counter />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
