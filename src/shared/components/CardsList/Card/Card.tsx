import React from "react";
import { IPostData } from "../../../../hooks/usePostsData";
import { Controls } from "../Controls";
import { Menu } from "../Menu";
import { Preview } from "../Preview";
import { TextContent } from "../TextContent";

import styles from "./card.scss";

export function Card(props: IPostData) {
  const { title, url, author, created, ups, downs, icon_img, banner_img, id } = props;
  return (
    <li className={styles.card}>
      <TextContent title={title} icon_img={icon_img} author={author} created={created} url={url} id={id} />
      <Preview banner_img={banner_img} />
      <Menu />
      <Controls ups={ups} downs={downs} />
    </li>
  );
}
