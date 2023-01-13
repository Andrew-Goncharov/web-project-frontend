export type EntityIdType = string;

export interface IEntity {
  id: EntityIdType;
  name: string;
  img: string;
  type: "CATEGORY" | "OFFER";
  children: Array<EntityIdType>;
  date: string | number;
  parentId: string | null;
  price: number | null;
}

export interface IFilters {
  name: string | null,
  type: "CATEGORY" | "OFFER" | null,
  parentId: string | null,
}

export interface IImportNode {
  name: string,
  id: string,
  parent_id: string | null,
  price: number | null,
  type: "CATEGORY" | "OFFER",
  updated_at: string,
  children: string[],
  image: string,
}
