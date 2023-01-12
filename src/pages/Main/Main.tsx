/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Main.module.css";
import { ElementCard } from "../../components";
import { useAppSelector } from "../../app/hooks";
import { getFilteredEntities } from "../../app/features/entities/getters";
import { IEntity, IFilters } from "../../app/features/entities/types";

function Main() {
  const [query, setQuery] = useSearchParams();
  const params = new URLSearchParams(query.toString());
  const [filters, setFilters] = useState<IFilters>({
    name: null || params.get("query"),
    type: null,
    parentId: null || params.get("category"),
  });

  const filteredEntities = useAppSelector<Array<IEntity | undefined>>((state) => getFilteredEntities(state, { ...filters, type: "OFFER" }));
  const fitleredCategories = useAppSelector<Array<IEntity | undefined>>((state) => getFilteredEntities(state, { ...filters, type: "CATEGORY" }));

  useEffect(() => {
    setFilters((f) => {
      const category = params.get("category");
      const name = params.get("query");
      if (category !== null && category !== undefined) {
        f.parentId = category;
      } else f.parentId = null;
      if (name !== null && name !== undefined && name !== "") {
        f.name = name;
      } else f.name = null;
      return f;
    });
  }, [params.get("category"), params.get("query")]);

  useEffect(() => {
    console.log("Filters");
    console.log(filters);
  }, [filters]);

  return (
    <div>
      <div
        className={styles.elementsGrid}
        style={{
          gridTemplateColumns:
            filteredEntities.length > 0 || fitleredCategories.length > 0 ? "repeat(3, 1fr)" : "1fr",
        }}
      >
        {fitleredCategories?.map((el) => (
          <ElementCard
            entity={el as IEntity}
            key={`${el?.name as string} ${el?.id as string} ${
              el?.img as string
            }`}
          />
        ))}
        {fitleredCategories.length === 0
        && filteredEntities?.map((el) => (
          <ElementCard
            entity={el as IEntity}
            key={`${el?.name as string} ${el?.id as string} ${
              el?.img as string
            }`}
          />
        ))}

        {/* If nothing was found */}
        {filteredEntities.length === 0 && fitleredCategories.length === 0 && (
          <div className={styles.notFound}>Nothing was found</div>
        )}
      </div>
    </div>
  );
}

export default Main;
