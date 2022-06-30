import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productSlice from "./Slices/productSlice"

const reducers = combineReducers({
    product: productSlice,
});

const store = configureStore({
    reducer: reducers,
});

export default store;