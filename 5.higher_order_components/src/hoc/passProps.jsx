import React, { Component } from 'react'

export default (props = {}) => WrappedComponent => {
  class EnhansedComponent extends Component {
    render () {
      return (
        <WrappedComponent {...props} {...this.props} />
      )
    }
  }

  return EnhansedComponent
}