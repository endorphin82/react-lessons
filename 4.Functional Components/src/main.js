import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//
//class Button extends Component {
//  static contextTypes = {
//    color: React.PropTypes.string
//  }
//  render () {
//    return (
//      <button style={{backgroundColor: this.context.color}}>
//        {this.props.children}
//      </button>
//    )
//  }
//}

const Button = (props, context) => (
  <button style={{backgroundColor: context.color}}>
    {props.children}
  </button>
);

Button.contextTypes = {
  color: React.PropTypes.string
};

Button.propTypes = {
  children: React.PropTypes.node.isRequired
}
const Message = props => (
  <div style={{border: '1px solid grey', margin: 10, padding: 10}}>
    <p>{props.text}</p>
    <Button>Delete</Button>
  </div>
);

//class Message extends Component {
//  render () {
//    return (
//      <div style={{border: '1px solid grey', margin: 10, padding: 10}}>
//        <p>{this.props.text}</p>
//        <Button>Delete</Button>
//      </div>
//    )
//  }
//}

const MessageList = props => (
  <div>
    {
      props.messages.map(message =>
        <Message key={message} text={message} />
      )
    }
  </div>
);

class App extends Component {

  static childContextTypes = {
    color: React.PropTypes.string
  }

  getChildContext () {
    return {
      color: 'lightblue'
    }
  }

  render () {
    return <MessageList messages={this.props.messages} />
  }
}

const MESSAGES = [
  'Fusce ac felis sit amet',
  'Vivamus aliquet elit ac nisl',
  'In hac habitasse platea dictumst',
  'Vestibulum ante ipsum primis in',
  'Sed cursus turpis vitae tortor',
  'Aenean commodo ligula eget dolor'
]

ReactDOM.render(
  <App messages={MESSAGES} />,
  document.getElementById('root'),
)
