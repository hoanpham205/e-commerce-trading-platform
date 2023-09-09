import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user_id: '',
//     email: '',
//     phone: '',
//     username: '',
//     avatar: '',
//     fullname: '',
//     sex: '',
//     role: '',
//     role: '',
//     refreshToken: '',
//     isLoggedIn: false
// }
export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        login:{
            currentUser:null,
            isFetching: false,
            error:false,
            isLoggedIn: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.isLoggedIn = true;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        logOut: (state) => {
            state.login.currentUser = null;
            state.login.isLoggedIn = false;
        },
        

    },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser,loginStart,loginSuccess,loginFailed,logOut } = authSlice.actions

export default authSlice.reducer