import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import styles from "./searcblock.scss";
import { useSelector } from "react-redux";
import { IUser, RootState } from "../../../../store";
import { useUserData } from "../../../../hooks/useUserData";
import { UserState } from "../../../../store/user/reducer";

export function SearcBlock() {
  useUserData();
  const {
    data: { name, iconImg },
    loading,
  } = useSelector<RootState, UserState>((state) => state.user);
  return (
    <div className={styles.searchBlock}>
      <UserBlock name={name} iconImg={iconImg} loading={loading} />
    </div>
  );
}
