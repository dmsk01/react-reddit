import React from "react";
import { Avatar } from "../../Avatar";
import { Break } from "../../Break";
import { CarmaCounter } from "../../CardsList";
import { CommentIcon, ShareIcon, WarningIcon } from "../../Icons";

import styles from "./comment.scss";

export function Comment() {
  return (
    <div className={styles.commentsCard}>
      <CarmaCounter />
      <div className={styles.commentBody}>
        <div className={styles.commentHeader}>
          <Avatar />
          <Break size={4} />
          <span className={styles.commentPersonName}>John Doe</span>
          <Break size={4} />
          <span className={styles.commentCreated}>1 hour ego</span>
          <Break size={4} />
          <span className={styles.commentPersonGroup}>Marvelous leage</span>
        </div>
        <p className={styles.commentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse voluptas ut eaque incidunt repellat provident corporis possimus quia illo magni quod deserunt, eum optio est quo velit eveniet adipisci!</p>
        <ul className={styles.commentFooter}>
          <li>
            <button type="button" className={styles.commentAction}>
              <CommentIcon /> Reply
            </button>
          </li>
          <li>
            <button type="button" className={styles.commentAction}>
              <ShareIcon /> Share
            </button>
          </li>
          <li>
            <button type="button" className={styles.commentAction}>
              <WarningIcon /> Report
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
