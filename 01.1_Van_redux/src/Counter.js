import React from 'react'

import { connect } from 'react-redux'

import { increment, decrement } from './actions'

class Counter extends React.Component {

  render () {
    const { count, increment, decrement } = this.props
    return (
      <div>
        <button onClick={() => decrement(5)}>-5</button>
        <button onClick={() => decrement(1)}>-1</button>
        {this.props.count}
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({count: state})

export default connect(mapStateToProps, { increment, decrement })(Counter)

