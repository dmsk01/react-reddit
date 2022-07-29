import React from "react";
import { Avatar } from "../../Avatar";
import { Break } from "../../Break";
import { Dropdown } from "../../Dropdown";
import { AngleDownIcon } from "../../Icons/AngleDownIcon";
import { CommentIcon } from "../../Icons/CommentIcon";
import { ShareIcon } from "../../Icons/ShareIcon";
import WarningIcon from "../../Icons/WarningIcon";

import styles from "./comments.scss";

interface ISortButton {
  title: string;
}

function SortButton({ title }: ISortButton) {
  return (
    <button className={styles.menuButton}>
      <span className={styles.buttonTitle}>{title}</span>
      <AngleDownIcon />
    </button>
  );
}

export function CommentsList() {
  return (
    <div>
      <div className={styles.sortBlock}>
        <span className={styles.sortInner}>
          <span>Sort by</span>
          <Break size={4} />
          <Dropdown button={<SortButton title="Best" />}>
            <span>Best</span>
            <span>Hot</span>
            <span>New</span>
          </Dropdown>
        </span>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsCard}>
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
            <li className={styles.commentAction}>
              <CommentIcon /> Reply
            </li>
            <li className={styles.commentAction}>
              <ShareIcon /> Share
            </li>
            <li className={styles.commentAction}>
              <WarningIcon /> Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
