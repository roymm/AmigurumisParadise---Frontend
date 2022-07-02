import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        success : false,
        product : null,
        products : [],
        errorMessage : null,
    },
    reducers: {
        cleanState: (state) => {
            state.success = false;
            state.product = null;
            state.products = [];
            state.errorMessage = null;
        }
    },

    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state, action) => {
                if (action.payload.error) {
                    state.products = [];
                    state.errorMessage = action.payload.message;
                } else {
                    state.products = action.payload;
                }
            })
    }
})

export const getAllProducts = createAsyncThunk('/api/products/', async () => {
    console.log("Entro");
    try {
        const products = await fetch("http://localhost:8500/api/products/", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        const productsData = await products.json();

        if (products.status === 200) {
            return productsData.results;
        } else {
            return {
                error: true,
                message: productsData.error.message,
            }
        }
    } catch (e) {
        console.log(e);
    }

});

export default productSlice.reducer;