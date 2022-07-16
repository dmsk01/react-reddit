import React from "react";

import cn from "classnames";

import styles from "./break.scss";

type TBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = "mobile" | "tablet" | "desktop";

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
}

function Break(props: IBreakProps) {
  const {
    size,
    inline = false,
    top = false,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;
  return (
    <div
      className={cn(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.top]: top }
      )}
    >
      Break
    </div>
  );
}

export default Break;
