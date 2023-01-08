/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { IEntity } from "../../app/features/entities/types";
import styles from "./ElementCard.module.css";

function ElementCard({ entity }: {entity: IEntity}) {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const params = new URLSearchParams(query.toString());

  return (
    <div
      className={styles.elementCardWrapper}
      onClick={() => {
        if (entity.type === "OFFER") {
          navigate(`/product/${entity.id}`);
        } else if (entity.type === "CATEGORY") {
          params.set("category", entity.id);
          setQuery(params.toString());
        }
      }}
    >
      <h2>{entity.name}</h2>
      <div>{entity.img}</div>
    </div>
  );
}

export default ElementCard;
