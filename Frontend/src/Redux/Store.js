import { configureStore } from "@reduxjs/toolkit";
import { alterSlice } from "./Features/alertSlice";
import { useSlice } from "./Features/userSlice";

export default configureStore({
    reducer:{
        alerts:alterSlice.reducer,
        user:useSlice.reducer
    }
})