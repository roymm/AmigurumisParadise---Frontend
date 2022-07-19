import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const name = 'user';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({name, initialState, reducers, extraReducers});

export const authActions = {...slice.actions, ...extraActions};
export const authReducer = slice.reducer;

function createInitialState() {
    return {
        userIsLoggedIn: false,
        user: null,
        error: null
    }
}

function createReducers() {
    return {
        logout
    };

    function logout(state) {
        state.userIsLoggedIn = false;
        state.user = null;
        localStorage.removeItem('user');
    }
}

function createExtraActions() {

    return {
        login: login(),
        register: register()
    };

    function login() {
        return createAsyncThunk('http://localhost:8500/api/users/login', async ({email, password}) => {
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

    function register() {
        return createAsyncThunk('http://localhost:8500/api/users/login', async (userInfo) => {
            const registerFetch = await fetch('http://localhost:8500/api/users/register', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
            console.log(registerFetch);
            const newUser = await registerFetch.json();
            console.log(newUser);
            if (registerFetch.status === 201) {
                return newUser;
            } else {
                return {
                    error: true,
                    message: newUser.error.message,
                }
            }
        });
    }
}

function createExtraReducers() {
    return {
        ...login(),
    };

    function login() {
        let {pending, fulfilled, rejected} = extraActions.login;
        return {
            [pending]: (state) => {
                state.error = null;
            },
            [fulfilled]: (state, action) => {
                if (action.payload.error) {
                    state.userIsLoggedIn = false;
                    state.user = null;
                    state.error = true;
                } else {
                    const user = action.payload;

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));
                    state.user = user;
                    state.userIsLoggedIn = true;
                }
            },
            [rejected]: (state, action) => {
                state.userIsLoggedIn = false;
                state.user = null;
                state.error = action.error;
            }
        };
    }
}
