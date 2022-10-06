import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useCommentsData } from "../../../hooks/useCommentsData";
import Actions from "./Actions/Actions";
import { CommentFormContainer } from "..";
import { CommentsList } from "./Comments";

import styles from "./post.scss";
import { useHistory } from "react-router-dom";

interface IPostProps {
  id?: string;
  selftext?: string;
  subreddit?: string;
  title?: string;
  body?: string;
  upvote_ratio?: number;
}

const NOOP = () => {};

export function Post({ id, title, selftext, upvote_ratio }: IPostProps) {
  const [postComments] = useCommentsData(id);
  const history = useHistory();
  const postId = history.location.key;
  console.log(postId);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        history.push("/");
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
      {
        <>
          <div className={styles.postActions}>
            <Actions
              comments={postComments.length}
              upvote_ratio={upvote_ratio}
            />
          </div>
          <div className={styles.postCommentForm}>
            <CommentFormContainer />
          </div>
          <div className={styles.postComments}>
            <CommentsList id={id} postComments={postComments} />
          </div>
        </>
      }
    </div>,
    node
  );
}
