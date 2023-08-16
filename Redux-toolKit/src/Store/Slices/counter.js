import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    counter: 0,
    showCounter: true,
  },
  reducers: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    hide(state){
      state.showCounter=false
    },
    show(state){
      state.showCounter=true
    },
    increase(state,action){
      state.counter+=action.payload;
    }
  }
});

export const CounterActions = counterSlice.actions;
export default counterSlice;