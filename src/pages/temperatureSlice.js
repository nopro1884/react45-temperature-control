import { createSlice } from "@reduxjs/toolkit";

const temperatureSlice = createSlice({
    name: "temperature",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = temperatureSlice.actions;

export default temperatureSlice.reducer;