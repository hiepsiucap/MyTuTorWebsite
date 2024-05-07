/** @format */

import { createSlice } from "@reduxjs/toolkit";
const initial = {
  name: "",
  email: "",
  role: "",
  ava: "",
  id: "",
  isSign: false,
};
export const UserSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    CreateNewUser: (state, action) => {
      console.log(action.payload);
      state.name = action.payload?.name || "";
      state.email = action.payload?.email || "";
      state.role = action.payload?.role || "";
      state.ava = action.payload?.ava;
      state.isSign = true;
      state.id = action.payload?._id;
    },
    Logout: (state) => {
      state.name = "";
      state.email = "";
      state.role = "";
      state.ava = "";
      state.isSign = false;
    },
    changeava: (state, action) => {
      state.ava = action.payload;
      console.log(state.ava);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  CreateNewUser,
  decrement,
  incrementByAmount,
  Logout,
  changeava,
} = UserSlice.actions;

export default UserSlice.reducer;
