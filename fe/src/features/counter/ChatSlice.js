/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../utils/services";
import { baseUrl } from "../../utils/services";
export const fetchUserChats = createAsyncThunk(
  "chat/fetchUserChats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRequest(`${baseUrl}/chats/`);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createAChat = createAsyncThunk(
  "chat/createAChat",
  async (secondId, { rejectWithValue }) => {
    try {
      const response = await postRequest(`${baseUrl}/chats`, {
        secondid: secondId,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userChat: null,
  isUserChatsLoading: false,
  setError: false,
  currentIdChat: "",
  setErrorMessege: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // Other synchronous reducers...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserChats.pending, (state) => {
        state.isUserChatsLoading = true;
      })
      .addCase(fetchUserChats.fulfilled, (state, action) => {
        state.isUserChatsLoading = false;
        state.userChat = action.payload;
      })
      .addCase(fetchUserChats.rejected, (state, action) => {
        state.isUserChatsLoading = false;
        // Handle error
      })
      .addCase(createAChat.fulfilled, (state, action) => {
        if (action.payload._id) {
          // Handle success
        } else {
          state.setError = true;
          state.setErrorMessege = action.payload?.msg;
        }
      })
      .addCase(createAChat.rejected, (state, action) => {
        // Handle error
      });
  },
});

export default chatSlice.reducer;
