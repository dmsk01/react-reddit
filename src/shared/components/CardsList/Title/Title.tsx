import React from "react";
import { Link } from "react-router-dom";

import styles from "./title.scss";

interface ITitleProps {
  title?: string;
  url?: string;
  id?: string;
  selftext?: string;
  subreddit?: string;
  upvote_ratio?: number;
}

function Title({ title, url, id, selftext, upvote_ratio }: ITitleProps) {
  return (
    <h2 className={styles.title} onClick={() => void 0}>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {title && title}
      </Link>
    </h2>
  );
}

export default Title;
