import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getAllEntities } from "./thunks";
import { IEntity } from "./types";

const EntitiesAdapter = createEntityAdapter<IEntity>();

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
          const emptyParent:IEntity = {
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
  extraReducers: (builder) => {
    builder.addCase(getAllEntities.fulfilled, (state, action) => {
      // console.log("All entities were fetched");
      // console.log(action.payload.data);
      EntitiesAdapter.setAll(state, action.payload.data);
      // EntitiesAdapter.setAll(state, action);
    });
    builder.addCase(getAllEntities.pending, () => {
      console.log("All fetch pending");
    });
    builder.addCase(getAllEntities.rejected, () => {
      console.log("All fetch rejected");
    });
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
