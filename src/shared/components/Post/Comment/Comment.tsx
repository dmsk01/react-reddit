import React from "react";
import { Avatar } from "../../Avatar";
import { Break } from "../../Break";
import { CarmaCounter } from "../../CardsList";
import { CommentIcon, ShareIcon, WarningIcon } from "../../Icons";

import styles from "./comment.scss";

interface ICommentData {
  author?: string;
  body?: string;
}

export function Comment({ author, body }: ICommentData) {
  return (
    <div className={styles.commentsCard}>
      <CarmaCounter />
      <div className={styles.commentBody}>
        <div className={styles.commentHeader}>
          <Avatar />
          <Break size={4} />
          <span className={styles.commentPersonName}>{author}</span>
          <Break size={4} />
          <span className={styles.commentCreated}>1 hour ego</span>
          <Break size={4} />
          <span className={styles.commentPersonGroup}>Marvelous leage</span>
        </div>
        <p className={styles.commentText}>{body}</p>
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
