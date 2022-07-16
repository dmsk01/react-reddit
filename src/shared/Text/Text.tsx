import React from "react";

import cn from "classnames";

import styles from "./text.scss";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  grayF3 = "grayF3",
  grayD9 = "grayD9",
  grayC4 = "grayC4",
  gray99 = "gray99",
  gray66 = "gray66",
}

interface ITextProps {
  As?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  children?: React.ReactNode;
  size: TSizes;
  desktopSize?: TSizes;
  tabletSize?: TSizes;
  mobileSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    children,
    size,
    desktopSize,
    tabletSize,
    mobileSize,
    color = EColor.black,
    bold = false,
  } = props;

  const classes = cn(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    { [styles.bold]: bold }
  );
  return <As className={classes}>{children}</As>;
}

export default Text;
