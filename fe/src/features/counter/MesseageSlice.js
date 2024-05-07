/** @format */
import { baseUrl, postRequest } from "../../utils/services";
import { createSlice } from "@reduxjs/toolkit";
const initial = {
  ListMessage: null,
  SetError: false,
  SetErrorMessege: "",
};
export const MessageSlice = createSlice({
  name: "message",
  initialState: initial,
  reducers: {
    AddMessageChat: (state, action) => {
      state.ListMessage = action.payload;
    },
    AddANewMessageChat: (state, action) => {
      state.ListMessage = [...state.ListMessage, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddMessageChat, AddANewMessageChat } = MessageSlice.actions;

export default MessageSlice.reducer;
