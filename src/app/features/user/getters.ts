/* eslint-disable import/prefer-default-export */
import { RootState } from "../../store";

export const getUserError = (state: RootState) => state.user.lastError;
export const getUser = (state: RootState) => state.user;
