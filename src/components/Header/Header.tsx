import React from "react";
import Search from "../Search/Search";
import styles from "./Header.module.css";

function Header() {
  return <div className={styles.headerWrapper}><Search /></div>;
}

export default Header;
