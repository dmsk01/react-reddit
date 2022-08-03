import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CommentForm } from "..";
import Actions from "./Actions/Actions";
import { CommentsList } from "./Comments";

import styles from "./post.scss";

interface IPostProps {
  onClose?: () => void;
  id?: string;
  selftext?: string;
  subreddit?: string;
}

export function Post({ onClose, id, selftext, subreddit }: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose && onClose?.();
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
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias repellendus ea laborum eius rerum hic inventore. Alias magni cupiditate culpa odit accusamus! Ipsa cum amet officia error, aperiam corrupti consequuntur?</h2>
      <div className={styles.content}>
        <p>{selftext}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta repellendus, voluptates qui maxime quaerat labore magni perspiciatis, obcaecati sit!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta repellendus, voluptates qui maxime quaerat labore magni perspiciatis, obcaecati sit!</p>
      </div>
      <div className={styles.postActions}>
        <Actions />
      </div>
      <div className={styles.postCommentForm}>
        <CommentForm />
      </div>
      <div className={styles.postComments}>
        <CommentsList id={id} subreddit={subreddit} />
      </div>
    </div>,
    node
  );
}
