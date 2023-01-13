import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { addElement } from "../../app/features/entities/thunks";
import { loginThunk } from "../../app/features/user/thunks";
import { useAppDispatch } from "../../app/hooks";
import ModalContext from "../Modal/modal-context";
import { Button, Input } from "../UIKit";
import styles from "./AddElementModal.module.css";
import { IImportNode } from "../../app/features/entities/types";

function AddElementModal() {
  const [username, setUsername] = useState<string>("");
  //  name, id, parentId, price, update_at, image,
  const [name, setName] = useState<string>("");
  const [parentId, setParentId] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [type, setType] = useState<"CATEGORY" | "OFFER">("OFFER");
  const [uuid, setUuid] = useState<string>("");
  //
  const { enqueueSnackbar } = useSnackbar();

  const { onClose } = useContext(ModalContext);
  const dispatch = useAppDispatch();

  const sendRequest = () => {
    console.log("Send request");
    const el: IImportNode = {
      name,
      price: parseInt(price, 10),
      parent_id: parentId,
      type,
      updated_at: Date.now().toString(10),
      children: [],
      image: "",
      id: uuid,
    };
    dispatch(addElement(el));
  };
  return (
    <div className={styles.formWrapper}>
      <h2>Add element</h2>
      <div className={styles.inputSection}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="parentId"
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
        />
        <Input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          placeholder="type (CATEGORY or OFFER)"
          value={type}
          onChange={(e) => setType(e.target.value as "CATEGORY" | "OFFER")}
        />
        <Input
          placeholder="UUIDv4"
          value={uuid}
          onChange={(e) => setUuid(e.target.value)}
        />
      </div>
      <div className={styles.buttonsSection}>
        <Button onClick={sendRequest}>Add element</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default AddElementModal;
