const redux = require('redux');

const initialState = {
  counter: 0,
};

const incrementAction = {
  type: 'INCREMENT',
};

const add = amount => ({
  type: 'ADD',
  payload: {
    amount,
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'ADD':
      return { ...state, counter: state.counter + action.payload.amount };
    default:
      return state;
  }
};

const store = redux.createStore(reducer, initialState);

let lastState = store.getState();
console.log('Initial store state: ', lastState);
store.subscribe(() => {
  const nextState = store.getState();
  if (nextState === lastState) return;
  console.log('Current state: ', nextState);
  lastState = nextState;
});
store.dispatch(incrementAction);
store.dispatch(add(5));
store.dispatch(add(-2));
store.dispatch({type: 'UNIMPLEMENTED'});
store.dispatch(add(30));
