import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CommentForm } from "..";
import { useCommentsData } from "../../../hooks/useCommentsData";
import Actions from "./Actions/Actions";
import { CommentsList } from "./Comments";

import styles from "./post.scss";

interface IPostProps {
  onClose?: () => void;
  id?: string;
  selftext?: string;
  subreddit?: string;
  title?: string;
  body?: string;
  upvote_ratio?: number;
}

const NOOP = () => {};

export function Post({ onClose = NOOP, id, title, selftext, upvote_ratio }: IPostProps) {
  const [postComments] = useCommentsData(id);
  const isAuthed = true; //TODO

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const node = document.getElementById("modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <p>{selftext}</p>
      </div>
      {isAuthed && (
        <>
          <div className={styles.postActions}>
            <Actions comments={postComments.length} upvote_ratio={upvote_ratio} />
          </div>
          <div className={styles.postCommentForm}>
            <CommentForm />
          </div>
          <div className={styles.postComments}>
            <CommentsList id={id} postComments={postComments} />
          </div>
        </>
      )}
    </div>,
    node
  );
}
