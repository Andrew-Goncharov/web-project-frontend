import React, { useContext, useEffect } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.css";
import { Button } from "../UIKit";
import ModalContext from "../Modal/modal-context";
import HomeButton from "../HomeButton/HomeButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser } from "../../app/features/user/getters";
import { logOutUser } from "../../app/features/user/userSlice";

function Header() {
  const { toggleLoginModal, toggleRegisterModal, toggleAddModal } = useContext(ModalContext);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.headerWrapper}>
      <HomeButton />
      <Search />

      <div className={styles.loginSection}>
        {user.sessionCreds === null && <Button onClick={toggleLoginModal}>Log in</Button>}
        {user.sessionCreds === null && <Button onClick={toggleRegisterModal}>Register</Button>}
        {user.sessionCreds !== null && <Button onClick={toggleAddModal}>Add element</Button>}
        {/* eslint-disable-next-line max-len */}
        {user.sessionCreds !== null && <Button onClick={() => dispatch(logOutUser())}>Log out</Button>}
      </div>
    </div>
  );
}

export default Header;
