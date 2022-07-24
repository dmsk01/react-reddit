import React, { useContext } from "react";
import { IPostData } from "../../hooks/usePostsData";
import { postsContext } from "../context/postsContext";
import { Card } from "./Card/Card";
import styles from "./cardslist.scss";

export function CardsList() {
  const posts = useContext(postsContext);
  console.log(posts);

  // console.log("card list", context);

  return (
    <ul className={styles.cardsList}>
      <Card />;
    </ul>
  );
}
