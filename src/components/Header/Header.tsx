import React, { useContext, useEffect } from "react";
// import { redirect } from "react-router";
import { useNavigate, useNavigation } from "react-router";
import Search from "../Search/Search";
import styles from "./Header.module.css";
import { Button } from "../UIKit";
import ModalContext from "../Modal/modal-context";
import HomeButton from "../HomeButton/HomeButton";

function Header() {
  const { toggleLoginModal } = useContext(ModalContext);
  return (
    <div className={styles.headerWrapper}>
      <HomeButton />
      <Search />

      <div className={styles.loginSection}>
        <Button onClick={toggleLoginModal}>Log in</Button>
      </div>
    </div>
  );
}

export default Header;
