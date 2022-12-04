/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EntityType } from "./types";

export const getAllEntities = createAsyncThunk<{ entites: EntityType[] }, void>(
  "entites/getAll",
  async () => {
    const resp = await fetch("https://vk.com");
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    // });
    return { entites: [] };
  },
);
