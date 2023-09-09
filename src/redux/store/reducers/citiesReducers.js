import { createReducer } from "@reduxjs/toolkit";
import { fetchData } from "../actions/citiesActions";

const initialState = {
    itineraries: [],
};

const citiesReducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.itineraries = action.payload;
    });
  });
  

export default citiesReducer;