export type ObjectIdType = string;

export interface StoreObjectType {
  id: ObjectIdType,
  name: string,
  type: "CATEGORY" | "OFFER",
  children: Array<ObjectIdType>,
  date: typeof Date,
  parentId: string | null,
  price: number,
}
