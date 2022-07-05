import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const name = 'user';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

function createInitialState(){
    return{
        userIsLoggedIn : false,
        user : null,
        error: null
    }
}

function createReducers(){
    return{
        logout
    };

    function logout(state){
        state.userIsLoggedIn = false;
        state.user = null;
        localStorage.removeItem('user');
    }
}

function createExtraActions() {

    return {
        login: login()
    };

    function login() {
        return createAsyncThunk('http://localhost:8500/api/users/login', async (credentials) => {
            console.log(credentials);
            const email = credentials.email;
            const password = credentials.password;

            const loginFetch = await fetch('http://localhost:8500/api/users/login', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const userData = await loginFetch.json();
            if (loginFetch.status === 200) {
                return userData;
            } else {
                return {
                    error: true,
                    message: userData.error.message,
                }
            }
        });
    }
}

function createExtraReducers() {
    return {
        ...login()
    };

    function login() {
        let { pending, fulfilled, rejected } = extraActions.login;
        return {
            [pending]: (state) => {
                state.error = null;
            },
            [fulfilled]: (state, action) => {
                const user = action.payload;

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                state.user = user;
                state.userIsLoggedIn = true;
            },
            [rejected]: (state, action) => {
                state.error = action.error;
            }
        };
    }
}
