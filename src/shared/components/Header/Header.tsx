import React from "react";
import styles from "./header.scss";
import { SearcBlock } from "./SearcBlock";
import { SortBlock } from "./SortBlock";
import { TreadTitle } from "./TreadTitle";

export function Header() {
  return (
    <header className={styles.header}>
      <SearcBlock />
      <TreadTitle />
      <SortBlock />
    </header>
  );
}
