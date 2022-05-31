import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";
import contentReducer from "./contentSlice";
import cartSlice from "./cartSlice";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };


export const store = configureStore({
    reducer:{
        fav: favSlice.reducer,
        cart: cartSlice.reducer,
        content: persistReducer(persistConfig, contentReducer)
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
persistStore(store);

//export default store;


