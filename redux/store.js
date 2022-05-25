import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";

const store = configureStore({
    reducer:{
        fav: favSlice.reducer
    }
});

export default store;