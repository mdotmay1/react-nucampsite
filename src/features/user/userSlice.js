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

*/

export const selectCurrentUser = (state) => {
    return state.user.currentUser
};