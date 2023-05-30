import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo_one: null,
  photo_two: null,
  photo_three: null,
  photo_one_to_send: null,
  photo_two_to_send: null,
  photo_three_to_send: null,
  photo_one_to_display: null,
  photo_three_to_display: null,
  photo_two_to_display: null,
  date_created: null,
  address: null,
  country: null,
  state: null,
  city: null,
  zipcode: null,
  category: null,
  number_of_travellers: null,
  number_of_bedrooms: null,
  number_of_beds: null,
  number_of_bathrooms: null,
  house_amenities: null,
  ad_title: null,
  description: null,
  user_id: 1,
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.category = action.payload;
    },
    setPhotos: (state, action) => {
      state.photo_one = action.payload[0];
      state.photo_two = action.payload[1];
      state.photo_three = action.payload[2];
      state.photo_one_to_send = action.payload[3];
      state.photo_two_to_send = action.payload[4];
      state.photo_three_to_send = action.payload[5];
      state.photo_one_to_display = action.payload[6];
      state.photo_three_to_display = action.payload[7];
      state.photo_two_to_display = action.payload[8];
    },
    setAddress: (state, action) => {
      state.address = action.payload.address;
      state.country = action.payload.country;
      state.city = action.payload.city;
      state.zipcode = action.payload.zipcode;
    },

    setNumbers: (state, action) => {
      state.number_of_travellers = action.payload.travelers;
      state.number_of_bedrooms = action.payload.bedrooms;
      state.number_of_beds = action.payload.beds;
      state.number_of_bathrooms = action.payload.bathrooms;
    },
    setEquipements: (state, action) => {
      if (action.payload.length > 1) {
        state.house_amenities = action.payload.join();
      } else {
        state.house_amenities = action.payload[0];
      }
    },
    setTitle: (state, action) => {
      state.ad_title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export default houseSlice.reducer;
export const {
  setType,
  setAddress,
  setNumbers,
  setPhotos,
  setEquipements,
  setTitle,
  setDescription,
} = houseSlice.actions;
