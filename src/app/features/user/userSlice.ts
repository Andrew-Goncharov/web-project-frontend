import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./types";
import { loginThunk, registerThunk } from "./thunks";

const initialState: IUser = {
  username: "",
  email: "",
  sessionCreds: null,
  lastError: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logOutUser(state) {
      state.sessionCreds = null;
      window.localStorage.setItem("token", "");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // console.log("Fulfilled");
      // console.log("action", action);
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.sessionCreds = action.payload.sessionCreds;
      window.localStorage.setItem("token", JSON.stringify(action.payload.sessionCreds));
      action.payload.callback();
    });
    builder.addCase(loginThunk.pending, (state, action) => {
      state.lastError = "";
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      // console.log("Rejected");
      // console.log(action);
      state.lastError = "Login attempt failed";
    });

    builder.addCase(registerThunk.fulfilled, (state, action) => {
      action.payload.callback();
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      // console.log(action.payload);
    });
  },
});

export default userSlice.reducer;

export const { logOutUser } = userSlice.actions;
