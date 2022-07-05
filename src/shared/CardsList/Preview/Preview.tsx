import React from "react";
import styles from "./preview.scss";

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://7themes.su/_ph/31/192346372.jpg" alt="Post image" />
    </div>
  );
}
