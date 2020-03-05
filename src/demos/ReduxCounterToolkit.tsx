import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, connect } from 'react-redux';

const initialState = {
  counter: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: {
      reducer: state => state + 1,
      prepare: () => ({ payload: null }),
    },
    decrement: state => state - 1,
  },
});

const { actions, reducer } = slice;
const { decrement, increment } = actions;

const store = configureStore({
  reducer: {
    counter: slice.reducer,
  },
});

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
          <button className="button" onClick={() => decrement()}>
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

const mapStateToProps = (state: { counter: number }) => ({
  value: state.counter,
});

// Map an object instead of a function which returns an object
const mapDispatchToProps = {
  // event: actionCreator
  increment,
  decrement,
};

// Create a higher-order component (HOC) ready to plug into a store
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Use the HOC as a descendant of Provider
function ReduxCounter() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}

export default ReduxCounter;
