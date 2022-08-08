import React from "react";
import { Break } from "../../Break";
import { Dropdown } from "../../Dropdown";
import { Comment } from "../Comment";
import { AngleDownIcon } from "../../Icons";
import { IPostComments } from "../../../../hooks/useCommentsData";
import styles from "./comments.scss";

interface ISortButton {
  title: string;
}

function SortButton({ title }: ISortButton) {
  return (
    <button className={styles.menuButton}>
      <span className={styles.buttonTitle}>{title}</span>
      <AngleDownIcon />
    </button>
  );
}

interface ICommentsListProps {
  id?: string;
  subreddit?: string;
  postComments?: IPostComments[];
}

export function CommentsList({ id, postComments }: ICommentsListProps) {
  return (
    <div>
      <div className={styles.sortBlock}>
        <span className={styles.sortInner}>
          <span>Sort by</span>
          <Break size={4} />
          <Dropdown button={<SortButton title="Best" />}>
            <span>Best</span>
            <span>Hot</span>
            <span>New</span>
          </Dropdown>
        </span>
      </div>
      <div className={styles.commentsContainer}>
        {postComments?.map((comment: IPostComments) => {
          return <Comment key={comment.data?.id} author={comment.data?.author} body={comment.data?.body} created={comment.data?.created} />;
        })}
      </div>
    </div>
  );
}
