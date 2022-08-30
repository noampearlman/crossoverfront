import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTypes} from './contypesAPI';
// import jwt_decode from "jwt-decode";

const initialState = {
    types: []
};



export const getTypesAsync = createAsyncThunk(
    'contypes/getTypes',
    async () => {
        // console.log(cred)

        const response = await getTypes();
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


export const contypesSlice = createSlice({
    name: 'types',
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
            .addCase(getTypesAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                if (action.payload) {
                    state.types = action.payload
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
export const selectTypes = (state) => state.contypes.types;

export default contypesSlice.reducer;