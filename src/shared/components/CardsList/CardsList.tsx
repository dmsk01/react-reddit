import React, { useContext } from "react";
import { postsContext } from "../../context/postsContext";
import { Card } from "./Card/Card";
import styles from "./cardslist.scss";

export function CardsList() {
  const posts = useContext(postsContext);
  if (!posts) return null;

  return (
    <ul className={styles.cardsList}>
      {posts.map((post) => (
        <Card
          key={post!.title}
          title={post?.title}
          author={post?.author}
          url={post?.url}
          created={post?.created}
          ups={post?.ups}
          downs={post?.downs}
          icon_img={post?.icon_img}
          banner_img={post?.banner_img}
          id={post?.id}
        />
      ))}
    </ul>
  );
}
