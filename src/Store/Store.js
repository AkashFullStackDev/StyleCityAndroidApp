import { configureStore } from "@reduxjs/toolkit";
import Product from "./Slices/Product/Product";
import User from "./Slices/User/User";
import SingleProduct from "./Slices/SingleProduct/SingleProduct";
import Cart from "./Slices/Cart/Cart";

const Store = configureStore({
    reducer: {
        product: Product,
        user: User,
        singleProduct: SingleProduct,
        cart: Cart
    }
})

export default Store;