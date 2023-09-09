
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './store/reducers/citiesReducers'; 
import { fetchData } from "./store/actions/citiesActions";

const store = configureStore({
  reducer: {
    citiesReducer,
  },
});

store.dispatch(fetchData());

export default store;
