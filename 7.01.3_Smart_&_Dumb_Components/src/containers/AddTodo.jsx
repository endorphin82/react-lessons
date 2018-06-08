import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import Input from '../components/Input.jsx';

//@connect(mapStateToProps, mapDisplatchToProps)

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddTodo: (value) => dispatch(addTodo(value))
  };
}

@connect(undefined, mapDispatchToProps)
export default class AddTodo extends Component {
  render() {
    return <Input placeholder="What needs to be done?" onEnter={this.props.onAddTodo} />;
  }
}