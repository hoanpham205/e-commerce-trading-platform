import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    access_token: '',
    id: '',
    isAdmin: false,
    city: '',
    refreshToken: ''
}
export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        login:{
            currentUser:null,
            isFetching: false,
            error:false,
        }
    },
    reducers: {
        updateUser: (state, action) => {
            const { name = '', email = '', access_token = '', address = '', phone = '', avatar = '', _id = '', isAdmin,city= '',refreshToken = '' } = action.payload
            state.name = name ? name : state.name;
            state.email = email ? email : state.email;
            state.address = address ? address : state.address;
            state.phone = phone ? phone : state.phone;
            state.avatar = avatar ? avatar : state.avatar;
            state.id = _id ? _id : state.id
            state.access_token = access_token ? access_token : state.access_token;
            state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
            state.city = city ? city : state.city;
            state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
        },
        resetUser: (state) => {
            state.name = '';
            state.email = '';
            state.address = '';
            state.phone = '';
            state.avatar = '';
            state.id = '';
            state.access_token = '';
            state.isAdmin = false;
            state.city = '';
            state.refreshToken = ''
        },
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        login
        

    },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = authSlice.actions

export default authSlice.reducer