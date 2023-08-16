import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './Slices/Auth';
import counterSlice from './Slices/counter';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: AuthSlice.reducer
  }
});

export default store;

