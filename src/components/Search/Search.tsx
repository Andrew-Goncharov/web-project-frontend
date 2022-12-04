import React from "react";
import Input from "../UIKit/Input/Input";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searcHeader}>Search</div>
      <div className={styles.searchInputWrapper}>
        <Input
          className={styles.searchInput}
          onChange={(e) => console.log(e.target.value)}
          value=""
          placeholder="Your search here"
        />
      </div>
    </div>
  );
}
export default Search;
