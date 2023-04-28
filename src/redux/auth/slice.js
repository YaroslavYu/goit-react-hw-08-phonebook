import { createSlice } from '@reduxjs/toolkit';
import { userRegister, userLogIn, userLogOut, userRefresh } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userInFulfiled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userRegister.fulfilled, userInFulfiled)
      .addCase(userLogIn.fulfilled, userInFulfiled)
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userRefresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userRefresh.rejected, state => {
        state.isRefreshing = false;
      });
    // {
    // [userRegister.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [userLogIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [userLogOut.fulfilled](state) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [userRefresh.pending](state) {
    //   state.isRefreshing = true;
    // },
    // [userRefresh.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // },
    // [userRefresh.rejected](state) {
    //   state.isRefreshing = false;
    // },
  },
});

export const authReducer = authSlice.reducer;
