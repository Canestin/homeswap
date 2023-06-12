import { configureStore } from "@reduxjs/toolkit";
import houseSlice from "./houseSlice";
import datesSlice from "./datesSlice";

const store = configureStore({
  reducer: {
    house: houseSlice,
    dates: datesSlice,
  },
});

export default store;
