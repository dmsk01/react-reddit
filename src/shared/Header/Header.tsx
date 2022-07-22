import React from "react";
import styles from "./header.scss";
import { SearcBlock } from "./SearcBlock";
import { SortBlock } from "./SortBlock";
import { TreadTitle } from "./TreadTitle";

interface IHeaderProps {
  token: string;
}

export function Header({ token }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <SearcBlock token={token} />
      <TreadTitle />
      <SortBlock />
    </header>
  );
}
