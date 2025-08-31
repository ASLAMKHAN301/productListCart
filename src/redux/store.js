import {configureStore} from "@reduxjs/toolkit"
// import buttonReducer from "./buttonSlice";
import cartReducer from "./cartSlice"

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        // button: buttonReducer,
    }
})