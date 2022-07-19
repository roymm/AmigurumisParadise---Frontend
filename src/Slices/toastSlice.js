import {createSlice} from "@reduxjs/toolkit";

const name = 'toast';
const initialState = createInitialState();
const reducers = createReducers();
const slice = createSlice({name, initialState, reducers});

export const toastActions = {...slice.actions};
export const toastReducer = slice.reducer;

function createInitialState() {
    return {
        newMessage: false,
        message: null,
        type: null,
    }
}

function createReducers() {
    return {
        reset,
        setMessage,
    };

    function reset(state) {
        state.newMessage = false;
        state.message = null;
        state.type = null;
    }

    function setMessage(state, action){
        state.message = action.payload.message;
        state.type = action.payload.type;
    }
}