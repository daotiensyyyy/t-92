import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../api/api";

export const fetchAllCategories = createAsyncThunk(
    'fetchAllCategories',
    async () => {
        const response = await api.getAllCategories();
        return response.data;
    }
);

export const fetchAllProducts = createAsyncThunk(
    'fetchAllProducts',
    async () => {
        const response = await api.getAllProducts();
        return response.data;
    }
);

export const fetchProductsByCategory = createAsyncThunk(
    'fetchProductsByCategory',
    async (value) => {
        const response = await api.getProductByCategory(value);
        return response.data;
    }
);

export const fetchProductBySlug = createAsyncThunk(
    'fetchProductBySlug',
    async (value) => {
        const response = await api.getProductBySlug(value);
        return response.data;
    }
);

export const placeOrder = createAsyncThunk(
    'placeOrder',
    async (data) => await api.placeOrder(data)
)

const initialState = {
    categories: [],
    products: [],
    details: {},
    cart: [],
    order: [],
    discounts: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            const itemId = action.payload;
            // console.log('deleteItem', itemId);
            // state.cart.splice(itemId, 1);
            state.cart = state.cart.filter(cart => cart.id !== itemId);
            // return state.cart;
        },
        addNewEvents: (state, action) => {
            state.discounts.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(fetchProductBySlug.fulfilled, (state, action) => {
            state.details = action.payload;
        });
        builder.addCase(placeOrder.fulfilled, (state, action) => {
            state.order = action.payload;
            // state.cart = [];
        });
    },
});

const { actions } = productSlice;
export const { addToCart, deleteFromCart, addNewEvents } = actions;
export default productSlice.reducer;