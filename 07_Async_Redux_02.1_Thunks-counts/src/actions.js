export const increment = value => ({ type: 'INCREMENT', value});

export const decrement = value => ({ type: 'DECREMENT', value});

export const incrementAsync = value =>  dispatch => {
  setTimeout(() => {
      dispatch(increment())
  }, 500);
}
