import { createSlice } from "@reduxjs/toolkit";
import { addDays } from "date-fns";

const initialState = [
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 90),
    key: "selection",
  },
];

const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    setDates: (_, action) => action.payload,
  },
});

export default datesSlice.reducer;
export const { setDates } = datesSlice.actions;
