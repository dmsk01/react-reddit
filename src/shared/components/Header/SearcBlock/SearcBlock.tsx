import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import styles from "./searcblock.scss";
import { useSelector } from "react-redux";
import { IUser, RootState } from "../../../../store";

export function SearcBlock() {
  const { name, iconImg } = useSelector<RootState, IUser>((state) => state.user.data);
  return (
    <div className={styles.searchBlock}>
      <UserBlock name={name} iconImg={iconImg} />
    </div>
  );
}
