import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    UserEmail : null 
}

const UserEmail = createSlice({
    name : 'UserEmail',
    initialState ,
     reducers : ({
        SaveEmail(state , action ){
            state.UserEmail = action.payload
            console.log(' state.UserEmail', state.UserEmail)
        }
     })
})

export default UserEmail.reducer

export const { SaveEmail } = UserEmail.actions;


  
