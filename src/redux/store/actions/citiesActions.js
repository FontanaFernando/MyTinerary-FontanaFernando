import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const getCitiesSync = createAction ('getCities', (data)=>{
    return {
        payload: 'ALGO'
    }
});

const getCitiesAsync = createAsyncThunk ('getCities', async (data)=>{
    return {
        payload: 'ALGO'
    }
});

export { getCities };