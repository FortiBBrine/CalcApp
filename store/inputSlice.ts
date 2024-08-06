import {createSlice} from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: "input",
    initialState: "",
    reducers: {
        addSymbol: (state, action) => {
            state += action.payload;
        },
        evaluate: (state) => {
            state = eval(state);
        },
    },
})

export const { addSymbol, evaluate } = inputSlice.actions;
export default inputSlice.reducer
