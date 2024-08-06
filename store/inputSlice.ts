import {createSlice} from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: "input",
    initialState: {
        text: ""
    },
    reducers: {
        addSymbol: (state, action) => {
            state.text += action.payload;
        },
        evaluate: (state) => {
            state.text = "" + eval(state.text)
        },
        clear: (state) => {
            state.text = ""
        },
        eraseOne: (state) => {
            state.text = state.text.slice(0, state.text.length - 1)
        },
    },
})

export const { addSymbol, evaluate, clear, eraseOne } = inputSlice.actions;
export default inputSlice.reducer
