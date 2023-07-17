import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: {},
        isLoggedIn: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
    },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
