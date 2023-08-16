import {createSlice} from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Authentication',
  initialState: {
    isAuth: false,
  },
  reducers: {
    verify(state){
      state.isAuth=true;
    },
    logout(state){
      state.isAuth=false;
    }
  }
});


export const AuthAction = AuthSlice.actions;
export default AuthSlice;