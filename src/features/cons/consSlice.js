import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { getCons } from './consAPI';
// import jwt_decode from "jwt-decode";

const initialState = {
    cons:[]
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
            // .addCase(signInAsync.rejected, (state, action) => {
                
            //     console.log('pending')
                
            // })
    },
});
// export const {logout} = loginSlice.actions
// export const selectLogged = (state) => state.login.logged;
// export const selectUsername = (state) => state.login.username;
// export const selectPassword = (state) => state.login.password;
export const selectCons = (state) => state.cons.cons;

export default consSlice.reducer;