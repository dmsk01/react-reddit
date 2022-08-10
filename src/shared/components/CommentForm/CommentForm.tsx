import React, { ChangeEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateComment } from "../../../strore";
import { AgnleBracketsIcon, ALetterIcon, ChangeIcon, CommentsIcon, DocumentIcon, DownloadIcon, LinkIcon, PDFIcon, PenIcon, PersonIcon, PictureIcon, RecordIcon } from "../Icons";

import styles from "./commentForm.scss";

interface ICommentForm {
  author?: string;
  comment?: string;
}

export function CommentForm({ author, comment }: ICommentForm) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const value = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }
  return (
    <form className={styles.form}>
      <textarea ref={ref} id="textarea" className={styles.input} value={value} onChange={handleChange} />
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
