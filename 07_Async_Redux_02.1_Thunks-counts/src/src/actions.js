export const increment = value => ({ type: 'INCREMENT', value });

export const incrementAsync = value => dispatch => {
    setTimeout(() => {
        dispatch(increment(value));
    }, 500);
};
