/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (userCreds: { username: string; password: string }, thunkAPI) => {
    console.log("Async thunk");
    const res = await axios("http://localhost:8000/login", {
      method: "POST",
      data: JSON.stringify(userCreds),
    });
    return res;
  },
);
