import React from "react";
import { Controls } from "../Controls";
import { Menu } from "../Menu";
import { Preview } from "../Preview";
import { TextContent } from "../TextContent";

import styles from "./card.scss";

export function Card() {

  return (
    <li className={styles.card}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
