export type EntityIdType = string;

export interface EntityType {
  id: EntityIdType;
  name: string;
  type: "CATEGORY" | "OFFER";
  children: Array<EntityIdType>;
  date: typeof Date;
  parentId: string | null;
  price: number;
}
