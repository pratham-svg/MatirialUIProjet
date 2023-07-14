import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser , createUser , updateUser } from '../../Services/UserServices'
const initialState = {
  user : [],
  status: 'idle',
  error: null,
};

export const fetchUserAsync = createAsyncThunk('/ ', async () => {
  const response = await getUser()
  return response.data;
});


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default userSlice.reducer;
