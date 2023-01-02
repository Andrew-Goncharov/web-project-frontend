import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./types";
import { loginThunk } from "./thunks";

const initialState: IUser = {
  username: "",
  email: "",
  sessionCreds: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      console.log("Fulfilled");
      console.log("action", action);
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      console.log("Rejected");
      console.log(action);
    });
  },
});

export default userSlice.reducer;
