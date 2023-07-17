import { createSlice } from "@reduxjs/toolkit";

const clubSlice = createSlice({
    name: "club",
    initialState: [],
    reducers: {
        setClub: (state, action) => {
            return action.payload;
        },
    },
});

export const { setClub } = clubSlice.actions;
export default clubSlice.reducer;
