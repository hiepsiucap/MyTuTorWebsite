/** @format */

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/counter/UserSlice";
import TutorReducer from "../features/counter/TutorSlice";
import ChatReducer from "../features/counter/ChatSlice";
import MesseageReducer from "../features/counter/MesseageSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, UserReducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
    tutor: TutorReducer,
    chat: ChatReducer,
    messeage: MesseageReducer,
  },
});
export const persistor = persistStore(store);
