import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "../UIKit";
import Input from "../UIKit/Input/Input";
import styles from "./Search.module.css";

interface InputProps {
  onSearchUpdate?: (e: string) => void;
}

const defaultProps: InputProps = {
  onSearchUpdate: () => null,
};

function Search({ onSearchUpdate }: InputProps) {
  const [search, setSearch] = useState("");

  const [query, setQuery] = useSearchParams();
  const params = new URLSearchParams(query.toString());

  const updateSearch = (text: string) => {
    if (text === "") params.delete("query");
    else params.set("query", text);

    setQuery(params.toString());
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") updateSearch(search);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (onSearchUpdate) onSearchUpdate(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchInputWrapper}>
        <Input
          className={`${styles.searchInput} ${
            search.length > 0 && styles.searchInputActive
          }`}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={search}
          placeholder="Click to search"
        />
      </div>
      <Button onClick={() => updateSearch(search)}>Search</Button>
      <ClearIcon
        onClick={() => {
          setSearch("");
          updateSearch("");
        }}
        style={{ fontSize: "3rem", opacity: search.length > 0 ? "1" : 0 }}
        className={styles.clearIconButton}
        color="inherit"
      />
    </div>
  );
}

Search.defaultProps = defaultProps;

export default Search;
