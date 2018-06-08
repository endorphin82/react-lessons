import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement, incrementAsync } from './actions'

class Counter extends Component {
  render () {
    const { count, increment, decrement } = this.props
    return (
      <div>
        <button onClick={() => decrement(5)}>-5</button>
        <button onClick={() => decrement(1)}>-1</button>
        {this.props.count}
        <button onClick={() => incrementAsync(1)}>+1</button>
        <button onClick={() => increment(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({count: state})

export default connect(mapStateToProps, { increment, decrement })(Counter)

