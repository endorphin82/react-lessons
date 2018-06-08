import React, { Component } from 'react';

import Footer from './Footer.jsx';

import AddTodo from '../containers/AddTodo.jsx'

import VisibleTodoList from '../containers/VisibleTodoList.jsx'

import styles from './TodoApp.less';

export default class TodoApp extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2 className={styles.header}>To do</h2>

                    <div className={styles.app}>
                        <AddTodo />
                        <VisibleTodoList />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
