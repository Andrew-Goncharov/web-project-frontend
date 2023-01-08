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
