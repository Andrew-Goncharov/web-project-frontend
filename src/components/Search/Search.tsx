import React, { useState } from "react";
import Input from "../UIKit/Input/Input";
import styles from "./Search.module.css";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searcHeader}>Search</div>
      <div className={styles.searchInputWrapper}>
        <Input
          className={styles.searchInput}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => console.log(e.key)}
          value={search}
          placeholder="Your search here"
        />
      </div>
    </div>
  );
}
export default Search;
