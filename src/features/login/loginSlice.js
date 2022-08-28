import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin } from './loginAPI';
import jwt_decode from "jwt-decode";

const initialState = {
    username: "",
    token: "",
    is_staff: false,
    is_superuser: false,
    logged: false
};



export const signInAsync = createAsyncThunk(
    'login/signin',
    async (cred) => {
        // console.log(cred)

        const response = await signin(cred);
        // The value we return becomes the `fulfilled` action payload
        //   console.log(response)
        return response;
    }
);
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.username = ""
            // state.password=""
            state.token = ""
            state.is_staff = false;
            state.is_superuser = false;
            state.logged = false;
            localStorage.removeItem('token');


        },
        autologin: (state) => {
            const localtoken = localStorage.getItem("token");
            if (localtoken) {
                if ((jwt_decode(localtoken).exp) * 1000 > (new Date().getTime() + 1)) {
                    state.token = localtoken
                    state.logged = true;
                    state.username = jwt_decode(localtoken).username
                    state.is_staff = jwt_decode(localtoken).is_staff;
                    state.is_superuser = jwt_decode(localtoken).is_superuser;
                }

            }
        }
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(signInAsync.fulfilled, (state, action) => {
                console.log(action.payload.data.access)
                if (action.payload.data.access) {
                    // { console.log(action) }
                    state.token = action.payload.data.access
                    state.logged = true;
                    // console.log(jwt_decode(action.payload.data.access).username)
                    state.username = jwt_decode(action.payload.data.access).username
                    state.is_staff = jwt_decode(action.payload.data.access).is_staff;
                    state.is_superuser = jwt_decode(action.payload.data.access).is_superuser;
                    localStorage.setItem('token', state.token);

                    // console.log(state.is_superuser)
                    // console.log( state.email)
                }
            }).addCase(signInAsync.rejected, (state, action) => {

                console.log('pending')

            })
    },
});
export const { logout,autologin } = loginSlice.actions
export const selectLogged = (state) => state.login.logged;
export const selectUsername = (state) => state.login.username;
export const selectPassword = (state) => state.login.password;
export const selectToken = (state) => state.login.token;
export const selectis_staff = (state) => state.login.is_staff;
export const selectis_superuser = (state) => state.login.is_superuser;

export default loginSlice.reducer;