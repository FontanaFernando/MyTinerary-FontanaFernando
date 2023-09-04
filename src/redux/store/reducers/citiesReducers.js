import { createReducer } from "@reduxjs/toolkit";
import { getCities } from "../actions/citiesActions";

const initialState = {
    cities: []
};

const citiesReducer = createReducer(initialState, 
    (builder) => builder.addCase(getCities, (state, action) => {
        const newState = { ...state, cities: action.payload }
        return newState
    })
);

export default citiesReducer;