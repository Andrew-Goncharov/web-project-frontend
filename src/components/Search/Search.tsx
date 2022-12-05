import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
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
          className={styles.searchInput}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={search}
          placeholder="Your search here"
        />
      </div>
      <Button onClick={() => console.log("click")}>Search</Button>
    </div>
  );
}

Search.defaultProps = defaultProps;

export default Search;
