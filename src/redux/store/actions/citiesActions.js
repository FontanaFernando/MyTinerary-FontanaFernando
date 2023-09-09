import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('FETCH_DATA', async () => {
        //console.log("Fetching data...");
        try {
            const response = await fetch('http://localhost:5175/api/itinerary');

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
        
          return data.itinerary;
        } catch (error) {
          throw error;
        }
});
      