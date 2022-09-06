import React, { useState } from "react";
import { Post } from "../..";

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
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title} onClick={() => void 0}>
      <a
        href={"#post-url"}
        className={styles.postLink}
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        {title && title}
      </a>
      {isModalOpened && (
        <Post
          id={id}
          title={title}
          selftext={selftext}
          upvote_ratio={upvote_ratio}
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </h2>
  );
}

export default Title;
