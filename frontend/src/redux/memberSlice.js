import { createSlice } from "@reduxjs/toolkit";
const memberSlice = createSlice({
    name: "member",
    initialState: [],
    reducers: {
        setMember: (state, action) => {
            state = action.payload;
        },
    },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
