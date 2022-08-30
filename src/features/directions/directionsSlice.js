import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDirs} from './directionsAPI';
// import jwt_decode from "jwt-decode";

const initialState = {
    dirs: []
};



export const getDirsAsync = createAsyncThunk(
    'Directions/getDirs',
    async () => {
        // console.log(cred)

        const response = await getDirs();
        // The value we return becomes the `fulfilled` action payload
        //   console.log(response.data)
        return response.data;
    }
);
// export const addConAsync = createAsyncThunk(
//     'cons/addCon',
//     async (data) => {
//         // console.log(cred)

//         const response = await addCon(data);
        
//         // The value we return becomes the `fulfilled` action payload
//         //   console.log(response.data)
//         return response.data;
//     }
// );
// export const delConAsync = createAsyncThunk(
//     'cons/delCon',
//     async (data) => {
        
        
//         const response = await delCon(data);
        
        
//         return response.data;
//     }
// );


export const directionsSlice = createSlice({
    name: 'directions',
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
            .addCase(getDirsAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                if (action.payload) {
                    state.dirs = action.payload
                }
            })
            // .addCase(addConAsync.fulfilled, (state, action) => {
            //     if (action.payload) {
            //         state.dirs = action.payload
            //     }
            // })
            // .addCase(delConAsync.fulfilled, (state, action) => {
            //     if (action.payload) {
            //         state.dirs = action.payload
            //     }
            // })
        // .addCase(signInAsync.rejected, (state, action) => {

        //     console.log('pending')

        // })
    },
});
export const selectDirs = (state) => state.directions.dirs;

export default directionsSlice.reducer;