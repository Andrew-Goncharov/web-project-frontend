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

  const USE_PALCEHOLDER = true;

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
      <div className={styles.imageDiv} style={{ backgroundImage: (USE_PALCEHOLDER ? "url(https://via.placeholder.com/500x350)" : entity.img) }}>
        {/* {USE_PALCEHOLDER && <img src="https://via.placeholder.com/500x350" alt={`${entity.name} img`} />}
        {!USE_PALCEHOLDER && <img src={entity.img || "https://via.placeholder.com/350x150"} alt={`${entity.name} img`} />} */}
      </div>
    </div>
  );
}

export default ElementCard;
