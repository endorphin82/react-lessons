import React, { Component, PropTypes } from 'react'

import passProps from '../hoc/passProps.jsx'

import './Note.css'

//decorator(options)(MyClass) => EnhancerClass
//@decorate1
@passProps({title: 'HOCs are COOL!'})

export default class Note extends Component {
  constructor () {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  static propTypes = {
    title: PropTypes.node,
    id: PropTypes.number.isRequired,
    color: PropTypes.string,
    children: PropTypes.node,
    onDelete: PropTypes.func.isRequired,
  }
  static defaultProps = {
    color: ' lightgreen',
  }

  handleDelete () {
    this.props.onDelete(this.props.id)
  }

  render () {
    const {
      title,
      color,
      children,
      onDelete,
    } = this.props

    return (
      <div className="note" style={{backgroundColor: color}}>
        <span className="note__delete-icon"
              onClick={this.handleDelete}> × </span>
        <h4>{title}</h4>
        {children}
      </div>
    )
  }
}

//export default passProps({title: 'Hello'}, Note)
