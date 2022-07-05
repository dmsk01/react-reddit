import React from "react";
import { Controls } from "../Controls";
import { Menu } from "../Menu";
import { Preview } from "../Preview";
import { TextContent } from "../TextContent";
import styles from "./card.scss";

export function Card() {
  return (
    <li className={styles.card}>
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

      <div className={styles.preview}>
        <img className={styles.previewImg} src="https://7themes.su/_ph/31/192346372.jpg" alt="Post image" />
      </div>

      <Menu />
      <Controls />
    </li>
  );
}
