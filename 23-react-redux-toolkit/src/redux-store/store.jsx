import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";

// create a store 
const store = configureStore({
    reducer : {
        //-> If it is a single reducer function, it will be directly used as a root reducer for the store.
        // else - Or an object of slice reducers that will be passed to `combineReducer()` 
        users : userSlice,
    }
})

export default store;

//-> 
/** Notes **
 * configureStore - accepts a single configuration object parameter
 */