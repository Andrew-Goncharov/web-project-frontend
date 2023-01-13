/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IEntity, IImportNode } from "./types";

export const getAllEntities = createAsyncThunk(
  "entites/getAll",
  async () => {
    const resp = await axios.get("http://0.0.0.0:8000/main/nodes");
    const a = Object.values(resp.data as IImportNode[]).map((el) => {
      let n: IEntity = {
        id: "",
        name: "",
        img: "",
        type: "CATEGORY",
        children: [],
        date: "",
        parentId: null,
        price: null,
      };
      n = {
        name: el.name,
        id: el.id,
        parentId: el.parent_id,
        date: el.updated_at,
        img: el.image,
        type: el.type,
        children: el.children,
        price: el.price,
      };
      return n;
    });
    return { data: a };
  },
);

export const addElement = createAsyncThunk(
  "entities/addOne",
  async (
    action: IImportNode,
    thunkAPI,
  ) => {
    await axios.post("http://0.0.0.0:8000/main/imports/", {
      items: [action],
    });
    return {};
  },
);
