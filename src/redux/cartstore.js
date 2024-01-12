import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import wishlist from "./slices/wishlist";
import cartsliice from "./slices/cartsliice";

const cartstore=configureStore({
    reducer:{
      productReducer:productsSlice,
      wishlistReducer:wishlist ,
      cartReducer:cartsliice
    }
})

export default cartstore