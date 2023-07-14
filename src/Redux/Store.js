import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducer/UserReducer';

const rootReducer = {
  user: userReducer,
  // Other reducers...
};

const store = configureStore({
  reducer: rootReducer,
  // Additional configuration options...
});

export default store;
