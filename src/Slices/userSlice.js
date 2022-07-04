import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        authToken : "",
        email : "",
    },
    reducers: {
        cleanState: (state) => {
            state.authToken = "";
            state.email = "";
        }
    },

    extraReducers(builder) {
        builder
            .addCase(getAllusers.fulfilled, (state, action) => {
                if (action.payload.error) {
                    state.users = [];
                    state.errorMessage = action.payload.message;
                } else {
                    state.users = action.payload;
                }
            })
    }
})

export const postLogin = createAsyncThunk('/api/users/login', async (credentials) => {
    const loginFetch = await fetch('http://localhost:8500/api/users/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.username,
            password: credentials.password,
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

export const getAllusers = createAsyncThunk('/api/users/', async () => {
    console.log("Entro");
    try {
        const users = await fetch("http://localhost:8500/api/users/", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        const usersData = await users.json();

        if (users.status === 200) {
            return usersData.results;
        } else {
            return {
                error: true,
                message: usersData.error.message,
            }
        }
    } catch (e) {
        console.log(e);
    }

});

export default userSlice.reducer;