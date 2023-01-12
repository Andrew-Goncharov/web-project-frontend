/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (
    action: { email: string; password: string; callback: () => void },
    thunkAPI,
  ) => {
    const res = await axios.post("http://0.0.0.0:8000/account/api/login/", {
      password: action.password,
      email: action.email,
    });
    // eslint-disable-next-line max-len
    return {
      username: action.email,
      email: action.email,
      sessionCreds: res.data,
      callback: action.callback,
    };
  },
);

export const registerThunk = createAsyncThunk(
  "user/register",
  async (
    action: {
      name: string;
      email: string;
      password: string;
      callback: () => void;
    },
    thunkAPI,
  ) => {
    await axios.post("http://0.0.0.0:8000/account/api/register/", {
      password: action.password,
      email: action.email,
      name: action.name,
    });
    return { callback: action.callback };
  },
);
