import React, { useContext, useState } from "react";
import { userContext } from "../../../context/userContext";
import { Avatar } from "../../Avatar";
import { Break } from "../../Break";
import { CarmaCounter } from "../../CardsList";
import { ReplyFormContainer } from "../../ReplyFormContainer";
import { CommentIcon, ShareIcon, WarningIcon } from "../../Icons";

import styles from "./comment.scss";

interface ICommentData {
  author?: string;
  body?: string;
  created?: number;
}

export function Comment({ author, body, created }: ICommentData) {
  const { name } = useContext(userContext);
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);
  const handleReply = () => {
    setIsReplyFormOpen(!isReplyFormOpen);
  };
  return (
    <div className={styles.commentsCard}>
      <CarmaCounter />
      <div className={styles.commentBody}>
        <div className={styles.commentHeader}>
          <Avatar />
          <Break size={4} />
          <span className={styles.commentPersonName}>{author}</span>
          <Break size={4} />
          <span className={styles.commentCreated}>{created}</span>
          <Break size={4} />
          <span className={styles.commentPersonGroup}>Marvelous leage</span>
        </div>
        <p className={styles.commentText}>{body}</p>
        <ul className={styles.commentFooter}>
          <li>
            <button onClick={handleReply} type="button" className={styles.commentAction}>
              <CommentIcon /> Reply
            </button>
          </li>
          <li>
            <button type="button" className={styles.commentAction}>
              <ShareIcon /> Share
            </button>
          </li>
          <li>
            <button type="button" className={styles.commentAction}>
              <WarningIcon /> Report
            </button>
          </li>
        </ul>
        {isReplyFormOpen && <ReplyFormContainer author={name} />}
      </div>
    </div>
  );
}
