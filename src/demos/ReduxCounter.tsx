import React from 'react';
import { AnyAction, createStore, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';

const initialState = {
  counter: 0,
};

// Action generators
const increment = () => ({
  type: 'INCREMENT',
});

const decrement = () => ({
  type: 'DECREMENT',
});

const add = (amount: number) => ({
  type: 'ADD',
  payload: {
    amount,
  },
});

// Reducer
const reducer = (state = { counter: 0 }, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'ADD':
      return { ...state, counter: state.counter + action.payload.amount };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

// End of Redux and store setup

// React setup

interface CounterProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}

// Presentational component
function Counter({ value, increment, decrement }: CounterProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-header-title">Redux Counter</h2>
      </div>
      <div className="card-content">
        <p>
          Counter: <span>{value}</span>
        </p>
        <div className="buttons">
          <button className="button" onClick={decrement}>
            Decrement
          </button>
          <button className="button" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: {counter: number}) => ({
  value: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

// Map an object instead of a function which returns an object
const betterMapDispatchToProps = {
  // event: actionCreator
  increment,
  decrement
};

// Create a higher-order component (HOC) ready to plug into a store
const ConnectedCounter = connect(mapStateToProps, betterMapDispatchToProps)(Counter);

// Use the HOC as a descendant of Provider
function ReduxCounter() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}

export default ReduxCounter;
