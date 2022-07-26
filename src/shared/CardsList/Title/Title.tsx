import React, { useState } from "react";
import Post from "../../Post/Post";

import styles from "./title.scss";

interface ITitleProps {
  title?: string;
  url?: string;
}

function Title({ title, url }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2
      className={styles.title}
      onClick={() => console.log("header card clicked")}
    >
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
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </h2>
  );
}

export default Title;
