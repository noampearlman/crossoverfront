import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCon,delCon,getCons, updCon } from './consAPI';
// import jwt_decode from "jwt-decode";

const initialState = {
    cons: []
};



export const getConsAsync = createAsyncThunk(
    'cons/getCons',
    async () => {
        // console.log(cred)

        const response = await getCons();
        // The value we return becomes the `fulfilled` action payload
        //   console.log(response.data)
        return response.data;
    }
);
export const addConAsync = createAsyncThunk(
    'cons/addCon',
    async (data) => {
        // console.log(cred)

        const response = await addCon(data);
        
        // The value we return becomes the `fulfilled` action payload
        //   console.log(response.data)
        return response.data;
    }
);
export const delConAsync = createAsyncThunk(
    'cons/delCon',
    async (data) => {
        
        
        const response = await delCon(data);
        
        
        return response.data;
    }
);
export const updConAsync = createAsyncThunk(
    'cons/updCon',
    async (data) => {
        
        console.log(data)
        const response = await updCon(data);
        
        
        return response.data;
    }
);


export const consSlice = createSlice({
    name: 'cons',
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
            .addCase(getConsAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                if (action.payload) {
                    state.cons = action.payload
                    // state.logged = true;
                    // console.log(jwt_decode(action.payload.data.access).username)
                    // state.username = jwt_decode(action.payload.data.access).username
                    // console.log(state.token)
                    // console.log( state.email)
                }
            })
            .addCase(addConAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cons = action.payload
                }
            })
            .addCase(delConAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cons = action.payload
                }
            })
            .addCase(updConAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.cons = action.payload
                }
            })
            
        // .addCase(signInAsync.rejected, (state, action) => {

        //     console.log('pending')

        // })
    },
});
export const selectCons = (state) => state.cons.cons;

export default consSlice.reducer;