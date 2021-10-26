import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import authApi from "../../api/authApi";

export const adminLogin = createAsyncThunk(
    'adminLogin',
    async (data) => {
        const response = await api.adminLogin(data);
        if (response.data.status === 200) {
            localStorage.setItem('user', response.data.accessToken);
            return response.data;
        }
        return;
    }

);
export const adminLogout = createAsyncThunk(
    'adminLogout',
    async () => await api.adminLogout(),
    localStorage.removeItem('user')
);
export const adminFetchAllProducts = createAsyncThunk(
    'adminFetchAllProducts',
    async () => {
        const response = await authApi.adminGetAllProducts();
        return response.data;
    }
);
export const createProduct = createAsyncThunk(
    'createProduct',
    async (data) => {
        const response = await authApi.createProduct(data);
        return response.data;
    }
);
export const deleteProduct = createAsyncThunk(
    'deleteProduct',
    async (value) => {
        const response = await authApi.deleteProductById(value);
        return response.data;
    }
);
export const fetchProductById = createAsyncThunk(
    'fetchProductById',
    async (value) => {
        const response = await authApi.getProductById(value);
        return response.data;
    }
);
export const editProductById = createAsyncThunk(
    'editProductById',
    async (value, data) => {
        const response = await authApi.editProductById(value, data);
        return response.data;
    }
);


const initialState = {
    products: [],
    details: {},
    userLogin: {},
    loginSuccess: 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminLogin.fulfilled, (state, action) => {
            state.userLogin = action.payload;
            state.loginSuccess = action.payload.isSuccess;
        });
        builder.addCase(adminLogin.rejected, (state, action) => {
            state.loginSuccess = 0;
        });
        builder.addCase(adminLogout.fulfilled, (state, action) => {
            state.userLogin = null;
            state.loginSuccess = 0;
        });
        builder.addCase(adminFetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const removeId = action.payload._id;
            state.products = state.products.filter(product => product._id !== removeId);
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.details = action.payload;
        });
        builder.addCase(editProductById.fulfilled, (state, action) => {
            state.details = action.payload;
        });
    },
});

// const { actions } = productSlice;
// export const { addToCart, deleteFromCart, addNewEvents } = actions;
export default authSlice.reducer;