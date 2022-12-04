import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { EntityType } from "./types";

const EntitesAdapter = createEntityAdapter<EntityType>();

export const entitiesSlice = createSlice({
  name: "storeObject",
  initialState: EntitesAdapter.getInitialState({ status: "idle" }),
  reducers: {
    objectsAddOne: EntitesAdapter.addOne,
    objectsSetAll: EntitesAdapter.setAll,
    objectsRemoveOne: EntitesAdapter.removeOne,
    objectsSetMany: EntitesAdapter.setMany,
  },
});

export default entitiesSlice;

export const {
  objectsAddOne,
  objectsSetAll,
  objectsRemoveOne,
  objectsSetMany,
} = entitiesSlice.actions;
