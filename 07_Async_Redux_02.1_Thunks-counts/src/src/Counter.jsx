import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementAsync } from './actions';

class Counter extends Component {
    render() {
        const { count, onIncrement } = this.props;

        return (
            <div onClick={onIncrement}>
                {count}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrement: ()  => dispatch(incrementAsync(ownProps.step))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
