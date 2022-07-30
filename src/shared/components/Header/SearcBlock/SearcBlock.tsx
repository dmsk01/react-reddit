import React, { useContext } from "react";
import UserBlock from "./UserBlock/UserBlock";
import styles from "./searcblock.scss";
import { userContext } from "../../../context/userContext";

export function SearcBlock() {
  const { iconImg, name } = useContext(userContext);
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
