import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IMessage } from "./types";

const MessageAdapter = createEntityAdapter<IMessage>({});

export const messageSlice = createSlice({
  name: "messageSlice",
  initialState: MessageAdapter.getInitialState(),
  reducers: {
    addOne(state, action) {
      MessageAdapter.addOne(state, action.payload);
    },
    removeOne(state, action) {
      MessageAdapter.removeOne(state, action);
    },
  },
});

export default messageSlice.reducer;

export const {
  addOne,
  removeOne,
} = messageSlice.actions;
