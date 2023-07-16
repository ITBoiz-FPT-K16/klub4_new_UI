import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: [],
    reducers: {
        setPost: (state, action) => {
            return action.payload;
        },
        addPost: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { setPost, addPost } = postSlice.actions;
export default postSlice.reducer;
