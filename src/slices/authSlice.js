import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //localStorage is used when user refreshes the page or open in new tab
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
