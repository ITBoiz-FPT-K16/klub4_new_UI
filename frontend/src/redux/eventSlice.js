import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: [],
    reducers: {
        addEvent: (state, action) => {
            return action;
        },
        setEvent: (state, action) => {
            return action.payload;
        },
        removeEvent: (state, action) => {
            state = state.filter((event) => event._id !== action.payload);
        },
    },
});

export const { addEvent, setEvent, removeEvent } = eventSlice.actions;
export default eventSlice.reducer;
