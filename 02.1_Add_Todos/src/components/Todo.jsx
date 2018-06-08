import React, { Component } from 'react';

import styles from './Todo.less';

export default class Todo extends Component {
    handleToggle = () => {
        this.props.onToggle(this.props.id)
    }
    render() {
        const { text, completed } = this.props;

        return (
            <div
                className={completed ? styles.completed : styles.root}
                onClick={this.handleToggle}
            >
                {text}
            </div>
        );
    }
}
