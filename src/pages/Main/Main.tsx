import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Main.module.css";
import { ElementCard } from "../../components";
import { useAppSelector } from "../../app/hooks";
import {
  // getAllEntities,
  getCategories,
} from "../../app/features/entities/getters";
import { IEntity } from "../../app/features/entities/types";

function Main() {
  const categories = useAppSelector(getCategories);

  // const filterByProducts = useState(false);
  // const filterByCategory = useState(true);

  const [query, setQuery] = useSearchParams();
  const params = new URLSearchParams(query.toString());

  const filterMethod = (el: IEntity | undefined) => {
    if (el === undefined) return false;
    if (params.get("query") === null) return true;
    if (el.name.includes(params.get("query") as string)) return true;
    return false;
  };

  return (
    <div>
      <div
        className={styles.elementsGrid}
        style={{
          gridTemplateColumns:
            categories?.filter(filterMethod).length > 0
              ? "repeat(3, 1fr)"
              : "1fr",
        }}
      >
        {categories?.filter(filterMethod).map((el) => (
          <ElementCard entity={el as IEntity} key={el?.name as string} />
        ))}
        {categories?.filter(filterMethod).length === 0 && (
          <div className={styles.notFound}>Nothing was found</div>
        )}
      </div>
    </div>
  );
}

export default Main;
