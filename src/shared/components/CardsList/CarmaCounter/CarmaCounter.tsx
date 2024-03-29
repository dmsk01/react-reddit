import React from "react";

import styles from "./carmaCounter.scss";

interface ICarmaCounterProps {
  ups?: string | number;
  downs?: string | number;
}

export function CarmaCounter({ ups, downs }: ICarmaCounterProps) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <svg width={19} height={10} viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
      <span className={styles.karmaValue}>{Number(ups) - Number(downs) || 0}</span>
      <button className={styles.down}>
        <svg className={styles.downArr} width={19} height={10} viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
    </div>
  );
}
