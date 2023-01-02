import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { loginThunk } from "../../app/features/user/thunks";
import { useAppDispatch } from "../../app/hooks";
import ModalContext from "../Modal/modal-context";
import { Button, Input } from "../UIKit";
import styles from "./LoginModal.module.css";

function LoginModal() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  const { onClose } = useContext(ModalContext);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.formWrapper}>
      <h2>Login</h2>
      <div className={styles.inputSection}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.buttonsSection}>
        <Button
          onClick={() => dispatch(loginThunk({ username, password }))}
        >
          Log in
        </Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default LoginModal;
