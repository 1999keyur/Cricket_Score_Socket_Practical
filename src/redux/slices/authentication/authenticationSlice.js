import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.errorMessage = "";
    },
    loginFailure: (state) => {
      state.errorMessage = "Invalid username or password";
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
