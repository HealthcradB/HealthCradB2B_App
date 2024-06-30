import { configureStore } from "@reduxjs/toolkit";
import myProductReducer from "./productSlice"
import myCartReducer from "./mycartSlice"


export const myStore = configureStore({
    reducer:{
        product:myProductReducer,
        cart:myCartReducer
    }
})