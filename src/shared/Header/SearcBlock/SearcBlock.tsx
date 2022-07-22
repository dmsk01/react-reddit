import React from "react";
import { useUserData } from "../../../hooks/useUserData";
import UserBlock from "./UserBlock/UserBlock";
import styles from "./searcblock.scss";

interface ISearcBlockProps {
  token: string;
}

export function SearcBlock({ token }: ISearcBlockProps) {
  const [data] = useUserData(token);
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
