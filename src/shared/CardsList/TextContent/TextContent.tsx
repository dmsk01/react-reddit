import React from "react";
import styles from "./textcontent.scss";

interface ITextContent {
  title?: string;
  author?: string;
  created?: string;
  icon_img?: string;
  url?: string;
}

export function TextContent({
  title,
  author,
  created,
  icon_img,
  url,
}: ITextContent) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={
              icon_img ||
              "https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
            }
            alt="Avatar"
          />
          <a href="#user-url" className={styles.username}>
            {author && author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {created && created}
        </span>
      </div>
      <h2 className={styles.title}>
        <a href={url} className={styles.postLink}>
          {title && title}
        </a>
      </h2>
    </div>
  );
}
