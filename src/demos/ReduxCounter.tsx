import React from 'react';
import { AnyAction } from 'redux';

const initialState = {
  counter: 0,
};

const incrementAction = {
  type: 'INCREMENT',
};

const add = (amount: number) => ({
  type: 'ADD',
  payload: {
    amount,
  },
});

const reducer = (state={counter: 0}, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'ADD':
      return { ...state, counter: state.counter + action.payload.amount };
    default:
      return state;
  }
};

function ReduxCounter() {
  return <div></div>;
}

function Counter() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-header-title">Redux Counter</h2>
      </div>
      <div className="card-content">
        
      </div>
    </div>
  )
}

export default ReduxCounter;
