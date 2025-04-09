import {configureStore} from "@reduxjs/toolkit";
import account from "../features/account/accountSlice.js"
import quote from "../features/quote/quoteSlice.js"

export const store = configureStore({
    reducer: {
        account, quote
    }
});