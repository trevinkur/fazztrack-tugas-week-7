import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {userId: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const {user_id, token} = action.payload.data;
            state.userId = user_id;
            state.token = token;
        },
        signout: (state, action) => {
            state.userId = null;
            state.token = null;
        }
    }
})

export const {setCredentials, signout} = authSlice.actions;
export default authSlice.reducer

export const {selectCurrentUser} = (state) => state.auth.userId;
export const {selectCurrentToken} = (state) => state.auth.token;
