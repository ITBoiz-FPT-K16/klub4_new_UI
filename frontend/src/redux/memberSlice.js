import { createSlice } from "@reduxjs/toolkit";
const memberSlice = createSlice({
    name: "member",
    initialState: [],
    reducers: {
        setMember: (state, action) => {
            return action.payload;
        },
    },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
