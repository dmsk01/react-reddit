import React from "react";
import cn from "classnames";

import styles from "./avatar.scss";

type TAvatarSize = 20 | 50;

interface IAvatarProps {
  src?: string;
  size?: TAvatarSize;
}

export function Avatar({ src, size = 20 }: IAvatarProps) {
  return <img className={cn(styles[`s${size}`], styles.avatar)} src={src || "https://www.redditstatic.com/avatars/avatar_default_02_FF4500.png"} alt="Avatar" />;
}
