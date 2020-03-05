import React from 'react';
import { AnyAction, createStore, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';

const initialState = {
  counter: 0,
};

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

function ReduxCounter() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}

interface CounterProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}

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

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ReduxCounter;
