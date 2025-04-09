
import {createSlice} from "@reduxjs/toolkit";


export const quoteSlice = createSlice({
    name: "quote",
    initialState: 'Winter is coming..',
    reducers: {
        addQuote: (state, action) => action.payload,
    }
})

export const {addQuote} = quoteSlice.actions;
export default quoteSlice.reducer;