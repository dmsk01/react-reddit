import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import styles from "./searcblock.scss";
import { useSelector } from "react-redux";
import { IUser, RootState } from "../../../../store";
import { useUserData } from "../../../../hooks/useUserData";

export function SearcBlock() {
  const { data, loading } = useUserData();

  // const { name, iconImg } = useSelector<RootState, IUser>((state) => state.user.data);
  return (
    <div className={styles.searchBlock}>
      <UserBlock name={data.name} iconImg={data.iconImg} loading={loading} />
    </div>
  );
}
