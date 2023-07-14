import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const intialState = {
    todo : [],
    status : 'idle' ,
    error : null
}

