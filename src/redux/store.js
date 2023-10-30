import { configureStore } from "@reduxjs/toolkit";
import AddtoCartSlice  from "../redux/features/addToCartSlice"


export const store = configureStore({
    reducer: {
      AddToSlice : AddtoCartSlice,
    },
  })