import React from "react";
import BlockIcon from "../../Icons/BlockIcon";
import { CommentIcon } from "../../Icons/CommentIcon";
import { SaveIcon } from "../../Icons/SaveIcon";
import { ShareIcon } from "../../Icons/ShareIcon";
import WarningIcon from "../../Icons/WarningIcon";

import styles from "./actions.scss";

interface IActionsProps {
  comments?: string | number;
  vote?: string | number;
}

function Actions({ comments = 22, vote = 54 }: IActionsProps) {
  return (
    <ul className={styles.actionsList}>
      <li className={styles.actionsItem}>
        <CommentIcon /> {comments} comment
      </li>
      <li className={styles.actionsItem}>
        <ShareIcon /> Share
      </li>
      <li className={styles.actionsItem}>
        <BlockIcon /> Hide
      </li>
      <li className={styles.actionsItem}>
        <SaveIcon /> Save
      </li>
      <li className={styles.actionsItem}>
        <WarningIcon /> Report
      </li>
      <li className={styles.actionsItem}>{vote}% Voted</li>
    </ul>
  );
}

export default Actions;
