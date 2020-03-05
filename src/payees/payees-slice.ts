import {createSlice} from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../store';
import {dao} from './payees-dao';

const initialState = {
  items: [],
  searchText: '',
  error: null,
  isLoading: false
}

const payeesSlice = createSlice({
  name: 'payees',
  initialState,
  reducers: {
    setSearchText: (state, action) => state.searchText = action.payload.searchText,
    requestPayees: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    receivePayees: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    receiveError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const fetchPayees = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(requestPayees());
  let payees = [];
  try {
    payees = await dao.getPayees();
    dispatch(receivePayees(payees));
  } catch (error) {
    dispatch(receiveError(error));
  }
}

const {actions, reducer} = payeesSlice;
const {receiveError, receivePayees, requestPayees, setSearchText} = actions;

export {reducer, receiveError, receivePayees, requestPayees, setSearchText};