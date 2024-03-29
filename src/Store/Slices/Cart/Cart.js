import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addProduct(state, action){
            state.push(action.payload);
        },
        removeProduct(state, action){
            return state.filter(item=>item._id !== action.payload._id);
        },
        replaceProducts(state, action){
            return action.payload;
        }
    }
})
export default cartSlice.reducer;
export const {addProduct, removeProduct, replaceProducts} = cartSlice.actions;