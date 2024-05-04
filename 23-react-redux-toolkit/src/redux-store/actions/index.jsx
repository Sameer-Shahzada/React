import { createAction } from "@reduxjs/toolkit";

export const removeAllUsers = createAction('removeAllUsers'); //-> This is your action type (which we will use in extra reducers)

// with this action now we no longer need removeAllUsers reducer function in slice.