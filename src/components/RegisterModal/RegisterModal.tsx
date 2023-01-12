import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { registerThunk } from "../../app/features/user/thunks";
import { useAppDispatch } from "../../app/hooks";
import ModalContext from "../Modal/modal-context";
import { Button, Input } from "../UIKit";
import styles from "./RegisterModal.module.css";

function RegisterModal() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  const { onClose } = useContext(ModalContext);
  const dispatch = useAppDispatch();

  const doRegister = () => {
    dispatch(
      registerThunk({
        name,
        password,
        email,
        callback: () => {
          enqueueSnackbar("User registered", { variant: "success" });
          onClose();
        },
      }),
    );
  };

  return (
    <div className={styles.formWrapper}>
      <h2>Register</h2>
      <div className={styles.inputSection}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && doRegister()}
        />
      </div>
      <div className={styles.buttonsSection}>
        <Button onClick={doRegister}>Register</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default RegisterModal;
