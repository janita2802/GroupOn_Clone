import { configureStore } from "@reduxjs/toolkit";
import attractionsReducer from "../components/Home/cartSlice";

export const store = configureStore({
  reducer: {
    attractions: attractionsReducer,
  },
});
