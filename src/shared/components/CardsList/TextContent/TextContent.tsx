import React from "react";
import Title from "../Title/Title";
import styles from "./textcontent.scss";

interface ITextContent {
  title?: string;
  author?: string;
  created?: number;
  icon_img?: string;
  url?: string;
  id?: string;
}

function timestampToDate(timestamp: number) {
  const date = new Date(timestamp * 1000).toISOString().split("T")[0];
  // const year = date.getFullYear();
  // let month = date.getMonth() + 1;
  // const day = date.getDay() + 1;
  // return `${day} ${month} ${year}`;
  return date;
}

export function TextContent({ title, author, created, icon_img, url, id }: ITextContent) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={icon_img || "https://cdn-icons-png.flaticon.com/512/4128/4128176.png"} alt="Avatar" />
          <a href="#user-url" className={styles.username}>
            {author && author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {created && timestampToDate(created)}
        </span>
      </div>
      <Title title={title} url={url} id={id} />
    </div>
  );
}
