import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import entitiesReducer from "./features/entities/entitesSlice";
import userReducer from "./features/user/userSlice";
import messageReducer from "./features/message/messageSlice";

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    user: userReducer,
    message: messageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
