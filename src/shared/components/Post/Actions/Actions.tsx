import React from "react";
import { BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon } from "../../Icons";

import styles from "./actions.scss";

interface IActionsProps {
  comments?: string | number;
  upvote_ratio?: number;
}

function Actions({ comments = 22, upvote_ratio = 54 }: IActionsProps) {
  return (
    <ul className={styles.actionsList}>
      <li className={styles.actionsItem}>
        <button>
          <CommentIcon /> {comments} comment
        </button>
      </li>
      <li className={styles.actionsItem}>
        <button>
          <ShareIcon /> Share
        </button>
      </li>
      <li className={styles.actionsItem}>
        <button>
          <BlockIcon /> Hide
        </button>
      </li>
      <li className={styles.actionsItem}>
        <button>
          <SaveIcon /> Save
        </button>
      </li>
      <li className={styles.actionsItem}>
        <button>
          <WarningIcon /> Report
        </button>
      </li>
      <li className={styles.actionsItem}>{upvote_ratio * 100}% Voted</li>
    </ul>
  );
}

export default Actions;
