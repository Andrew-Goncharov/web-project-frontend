/* eslint-disable import/prefer-default-export */
import { RootState } from "../../store";
import { IEntity } from "./types";

export const getEntityById = (state: RootState, id: string) =>
  state.entities.entities[id];
export const getCategories = (state: RootState) =>
  Object.values(state.entities.entities).filter((el: IEntity | undefined) => {
    if (el !== undefined) {
      if (el.type === "CATEGORY") return true;
    }
    return false;
  });
export const getAllChildren = (state: RootState, id: string) => {
  const res: IEntity[] = [];
  state.entities.entities[id]?.children?.forEach((el) => {
    if (el !== undefined) {
      res.push(state.entities.entities[el] as IEntity);
    }
  });
  return res;
};

export const getAllEntities = (state: RootState) =>
  Object.values(state.entities.entities);
