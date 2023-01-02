/* eslint-disable import/prefer-default-export */
import { RootState } from "../../store";
import { EntityType } from "./types";

export const getEntityById = (state: RootState, id: string) => state.entities.entities[id];
export const getCategories = (state: RootState) => Object
  .values(state.entities.entities)
  .filter((el: EntityType | undefined) => {
    if (el !== undefined) {
      if (el.type === "CATEGORY") return true;
    }
    return false;
  });
// export const getLastId = (state: RootState) =>
