import {configureStore} from "@reduxjs/toolkit";
import {inputSlice} from "./inputSlice";

export const store = configureStore({
    reducer: {
        input: inputSlice.reducer
    },
})
export type IRootState = ReturnType<typeof store.getState>
