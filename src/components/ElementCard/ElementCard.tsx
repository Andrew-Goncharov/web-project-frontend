import React from "react";
import styles from "./ElementCard.module.css";

function ElementCard() {
  return (
    <div
      className={styles.elementCardWrapper}
    >
      <h2>Element</h2>
      <div>Description + image</div>
    </div>
  );
}

export default ElementCard;
