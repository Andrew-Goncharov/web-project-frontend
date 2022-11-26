import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StoreObjectType } from "./types";

const ObjectsAdapter = createEntityAdapter<StoreObjectType>();

export const storeObjectsSlice = createSlice({
  name: "storeObject",
  initialState: ObjectsAdapter.getInitialState({ status: "idle" }),
  reducers: {
    objectsAddOne: ObjectsAdapter.addOne,
    objectsSetAll: ObjectsAdapter.setAll,
    objectsRemoveOne: ObjectsAdapter.removeOne,
    objectsSetMany: ObjectsAdapter.setMany,
  },
});

export default storeObjectsSlice;

export const {
  objectsAddOne,
  objectsSetAll,
  objectsRemoveOne,
  objectsSetMany,
} = storeObjectsSlice.actions;
