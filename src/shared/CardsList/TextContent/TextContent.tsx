import React from "react";
import styles from "./textcontent.scss";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" alt="Avatar" />
          <a href="#user-url" className={styles.username}>
            John Doe
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          It should be pointed out that agreement organisation model should be mo flexible.
        </a>
      </h2>
    </div>
  );
}
