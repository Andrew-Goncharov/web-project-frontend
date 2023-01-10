export type EntityIdType = string;

export interface IEntity {
  id: EntityIdType;
  name: string;
  img: string;
  type: "CATEGORY" | "OFFER";
  children: Array<EntityIdType>;
  date: number;
  parentId: string | null;
  price: number | null;
}

export interface IFilters {
  name: string | null,
  type: "CATEGORY" | "OFFER" | null,
  parentId: string | null,
}
