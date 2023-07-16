import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: [],
    reducers: {
        addEvent: (state, action) => {
            state.push(action.payload);
        },
        setEvent: (state, action) => {
            state = action.payload;
        },
        removeEvent: (state, action) => {
            state = state.filter((event) => event._id !== action.payload);
        },
    },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
