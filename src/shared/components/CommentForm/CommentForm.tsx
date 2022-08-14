import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { AgnleBracketsIcon, ALetterIcon, ChangeIcon, CommentsIcon, DocumentIcon, DownloadIcon, LinkIcon, PDFIcon, PenIcon, PersonIcon, PictureIcon, RecordIcon } from "../Icons";

import styles from "./commentForm.scss";

interface ICommentForm {
  author?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (event: FormEvent) => void;
}

export function CommentForm({ author, value, onChange, onSubmit }: ICommentForm) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea ref={ref} id="textarea" className={styles.input} value={value} onChange={onChange} />
      {!value && (
        <label className={styles.textareaLabel} htmlFor="#textarea">
          <span>{author && author + ", "}</span>
          leave your comment
        </label>
      )}

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
