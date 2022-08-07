import React, { useState } from "react";
import { Post } from "../..";

import styles from "./title.scss";

interface ITitleProps {
  title?: string;
  url?: string;
  id?: string;
  selftext?: string;
  subreddit?: string;
}

function Title({ title, url, id }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title} onClick={() => console.log("header card clicked")}>
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
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </h2>
  );
}

export default Title;
