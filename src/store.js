import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {authReducer} from "./Slices/authSlice";

const reducers = combineReducers({
    auth: authReducer
})

const rootPersistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export default store;