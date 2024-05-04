import {createSlice} from '@reduxjs/toolkit';

import { removeAllUsers } from '../actions'; // import createAction from action directory

// create a slice 
const userSlice = createSlice({
    name : 'user',
    initialState:[],
    // An object of reducer functions which automatically generate action creaters & action types
    reducers : {
        // can have multiple reducers action functions here

        // addUser , removeUser etc are also known as action creaters
        addUser(state , action) {
            state.push(action.payload);
        },
        removeUser(state , action) {
            console.log('remove user - ' + action.payload);
            // state.pop(action.payload);
            state.splice(action.payload, 1)
        },
        removeAllUsers(state , action) {
            console.log('removeAllUser clicked');
            return [];
        },
    },
    // extraReducers(builder) {
    //     builder.addCase(userSlice.actions.removeAllUsers, ()=> {  userSlice.actions.removeAllUsers , () => {} to get the reducer from other slices
    //         return [];
    //     })
    // }    It is work based on the above removeAllUsers reducer without additional action creater that's why it is 
    //      neccessary to keep removeAllUsers reducer action function with extraReducer

    extraReducers(builder) {
        builder.addCase(removeAllUsers, () => {
            return [];
        })
    }
});
/** Note
 *  If action is supposed to be handled by one reducer, use reducers.
 *  If action is supposed to be handled by multiple reducers, use extraReducers 
 *
  */
console.log(userSlice.actions); //- This is the action creater which also tells action type


export default userSlice.reducer;
export const {addUser , removeUser } = userSlice.actions;