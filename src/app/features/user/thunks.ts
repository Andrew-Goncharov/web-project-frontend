/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (
    action: { username: string; password: string },
    thunkAPI,
  ) => {
    const res = await axios("http://localhost:3000", {
      method: "GET",
      data: JSON.stringify(action),
    });
    return { status: res.status };
  },
);
