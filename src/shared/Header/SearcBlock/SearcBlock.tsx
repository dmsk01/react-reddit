import React from "react";
import styles from "./searcblock.scss";
import UserBlock from "./UserBlock/UserBlock";

export function SearcBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
  );
}
