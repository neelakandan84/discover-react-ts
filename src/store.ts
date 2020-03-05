import { configureStore, Action, combineReducers } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { reducer as payeesReducer, fetchPayees } from './payees/payees-slice';

const rootReducer = combineReducers({
  payees: payeesReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(fetchPayees());

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
