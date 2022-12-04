import React from "react";
import styles from "./Main.module.css";
import { ElementCard } from "../../components";

function Main() {
  return (
    <div>
      <div
        className={styles.elementsGrid}
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
      </div>
    </div>
  );
}

export default Main;
