import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addProp, delProp, getProps, updProp } from './propertiesAPI';
// import jwt_decode from "jwt-decode";

const initialState = {
  props: []
};



export const getPropsAsync = createAsyncThunk(
  'properties/getProps',
  async () => {
    // console.log(cred)

    const response = await getProps();
    // The value we return becomes the `fulfilled` action payload
    //   console.log(response.data)
    return response.data;
  }
);
export const addPropAsync = createAsyncThunk(
  'properties/addProp',
  async (data) => {
    // console.log(cred)

    const response = await addProp(data);
    // The value we return becomes the `fulfilled` action payload
    //   console.log(response.data)
    return response.data;
  }
);
export const delPropAsync = createAsyncThunk(
  'properties/delProp',
  async (data) => {


    const response = await delProp(data);


    return response.data;
  }
);
export const updPropAsync = createAsyncThunk(
  'properties/updProp',
  async (data) => {

    console.log(data)
    const response = await updProp(data);


    return response.data;
  }
);

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    // logout: (state) => {
    //         state.token = ""
    //         state.logged = false;
    //         state.username= ""
    //         state.password=""
    //   },
  },
  //  async  (3)
  //   happens when async done - callback
  extraReducers: (builder) => {
    builder
      .addCase(getPropsAsync.fulfilled, (state, action) => {
        
        if (action.payload) {
          state.props = action.payload
          
        }
      })
      .addCase(addPropAsync.fulfilled, (state, action) => {
        
        if (action.payload) {
          state.props = action.payload
          
        }
      })
      .addCase(delPropAsync.fulfilled, (state, action) => {
        
        if (action.payload) {
          state.props = action.payload
          
        }
      })
      .addCase(updPropAsync.fulfilled, (state, action) => {
        
        if (action.payload) {
          state.props = action.payload
          
        }
      })
    
  },
});

export const selectProps = (state) => state.properties.props;

export default propertiesSlice.reducer;