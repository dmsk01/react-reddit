import React, { CSSProperties } from "react";

import Block from "./assets/block.svg";

import styles from "./icon.scss";

export enum EIcons {
  block = "block",
  warning = "warning",
}

interface IIcon {
  name: EIcons;
}

export function Icon({ name }: IIcon) {
  return <span>{name}</span>;
}

export default Icon;
