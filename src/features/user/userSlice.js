import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {...state, currentUser: action.payload}
        }
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

/* MY FIRST ATTEMPT:

export const selectCurrentUser = () => (state) => {
    return state.user.currentUser
};

THIS CAUSED THE LOGIN BUTTON TO NOT SHOW CORRECTLY.  
NOT SURE I UNDERSTAND THE DIFFERENCE BETWEEN THE TWO.
GOT A CLUE FROM how selectFeaturePartner is exported from partnersSlice.js
on how to correct it.

INSTRUCTOR FEEDBACK:

userSlice.js Line 21: Mmm, yes, this is a confusing bit. Were you there in class when we talked about the difference between 
a selector and a selector creator? You could check out the Workshop slides to see the difference. When it's a function that 
returns a function, it's a selector creator and needs to be used that way. If you write it as a selector creator but use it 
as a plain selector, you'll get an issue, like you saw. Let me know if you have more questions on this! :)

*/

export const selectCurrentUser = (state) => {
    return state.user.currentUser
};