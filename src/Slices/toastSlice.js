import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const name = 'toast';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({name, initialState, reducers, extraReducers});

export const authActions = {...slice.actions, ...extraActions};
export const authReducer = slice.reducer;

function createInitialState() {
    return {
        message: null,
        type: null,
        duration: 0
    }
}

function createReducers() {
    return {
        reset
    };

    function reset(state) {
        state.message = null;
        state.type = null;
        this.state.duration = 0;
    }
}