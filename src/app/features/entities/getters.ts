/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from "../../store";
import { IEntity, IFilters } from "./types";

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

export const getFilteredEntities = (state: RootState, filters: IFilters) => {
  let entArr = Object.values(state.entities.entities);
  const { name, type, parentId } = filters;
  if (name !== null && name !== undefined) {
    entArr = entArr.filter((el) => el?.name.includes(name));
  }

  if (type !== null && type !== undefined) {
    entArr = entArr.filter((el) => el?.type === type);
  }
  // if (name === undefined || name === null || name.length > 0) {
  if (parentId !== undefined && parentId !== null) {
    entArr = entArr.filter((el) => el?.parentId === parentId);
  }
  // } else if (parentId !== undefined) {
  //   entArr = entArr.filter((el) => el?.parentId === parentId);
  // }
  return entArr;
};
