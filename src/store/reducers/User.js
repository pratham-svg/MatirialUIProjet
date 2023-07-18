// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    
};

// ==============================|| SLICE - MENU ||============================== //

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
     logIn(){
       
     }    
  }
});

export default user.reducer;

export const {  } = user.actions;
