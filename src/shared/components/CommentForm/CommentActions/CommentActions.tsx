import React from "react";
import { AgnleBracketsIcon, ALetterIcon, ChangeIcon, CommentsIcon, DocumentIcon, DownloadIcon, LinkIcon, PDFIcon, PenIcon, PersonIcon, PictureIcon, RecordIcon } from "../../Icons";

import styles from "./commentActions.scss";

function CommentActions() {
  return (
    <ul className={styles.actions}>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <AgnleBracketsIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <PictureIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <DocumentIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <DownloadIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <PersonIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <ChangeIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <LinkIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <RecordIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <CommentsIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <PenIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <ALetterIcon />
        </button>
      </li>
      <li className={styles.action}>
        <button className={styles.actionButton}>
          <PDFIcon />
        </button>
      </li>
    </ul>
  );
}

export default CommentActions;
