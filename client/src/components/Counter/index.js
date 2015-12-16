import React, { Component } from 'react'
import initialState from './initial-state'
import reducer from './reducer'
import styles from './style.css'

class Counter extends Component {
  state = initialState
  useAction = (action) =>
    () => this.setState(reducer(action, this.state))

  render() {
    const { counter } = this.state
    return (
      <div>
        <p className={styles.counter}>Counter is {counter}</p>
        <button onClick={this.useAction({ type: 'add' })}>+ 1</button>
      </div>
    )
  }
}

export default Counter
