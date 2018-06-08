import { connect } from 'react-redux'

import { toggleTodo } from '../actions'

import TodoList from '../components/TodoList.jsx'

//@connect(mapStateToProps, {toggleTodo})

function getVisibleTodos (todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos

    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)

    case 'SHOW_NEW':
      return todos.filter(todo => !todo.completed)
  }
}

function mapStateToProps (state) {
  return {
    todos: getVisibleTodos(state.todos, state.filter),
  }
}

const mapDispatchToProps = ({
  onToggleTodo: toggleTodo,
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)