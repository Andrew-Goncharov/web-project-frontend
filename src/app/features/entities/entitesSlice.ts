import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { EntityType } from "./types";

const EntitiesAdapter = createEntityAdapter<EntityType>();

export const entitiesSlice = createSlice({
  name: "storeObject",
  initialState: EntitiesAdapter.getInitialState({ status: "idle" }),
  reducers: {
    objectsAddOne(state, action) {
      if (state.ids.includes(action.payload.parentId)) {
        const parent = state.entities[action.payload.parentId];
        if (parent !== undefined) {
          parent?.children.push(action.payload.id);
          EntitiesAdapter.setOne(state, parent);
        } else if (action.payload.parentId !== null) {
          const emptyParent:EntityType = {
            id: action.payload.parentId, name: "", type: "CATEGORY", img: "", children: [action.payload.id], date: Date.now(), parentId: null, price: null,
          };
          EntitiesAdapter.addOne(state, emptyParent);
        }
      }

      EntitiesAdapter.addOne(state, action);
    },
    objectsSetAll(state, action) {
      EntitiesAdapter.setAll(state, action);
    },
    objectsRemoveOne(state, action) {
      EntitiesAdapter.removeOne(state, action);
    },
    objectsSetMany(state, action) {
      EntitiesAdapter.setMany(state, action);
    },
    objectSetOne(state, action) {
      EntitiesAdapter.setOne(state, action);
    },
  },
});

export default entitiesSlice.reducer;

export const {
  objectsAddOne,
  objectsSetAll,
  objectsRemoveOne,
  objectsSetMany,
} = entitiesSlice.actions;

// export const {} = EntitiesAdapter
