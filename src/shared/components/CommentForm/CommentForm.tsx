import React, { ChangeEvent, useContext } from "react";
import { commentContext } from "../../context/commentContext";
import { AgnleBracketsIcon, ALetterIcon, ChangeIcon, CommentsIcon, DocumentIcon, DownloadIcon, LinkIcon, PDFIcon, PenIcon, PersonIcon, PictureIcon, RecordIcon } from "../Icons";

import styles from "./commentForm.scss";

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange && onChange(event.target.value);
  }
  return (
    <form className={styles.form}>
      <textarea className={styles.input} value={value} onChange={handleChange} placeholder={"Leave your comment here"} />
      <div className={styles.formBottom}>
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
        <button className={styles.button} type="submit">
          Comment
        </button>
      </div>
    </form>
  );
}
