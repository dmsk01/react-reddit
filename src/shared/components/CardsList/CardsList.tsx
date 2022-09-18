import React, { useContext, useEffect, useState } from "react";
import { IPostsContextData } from "../../context/postsContext";
import { Card } from "./Card/Card";

import axios from "axios";

import styles from "./cardslist.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export interface IPostData {
  id?: string;
  subreddit?: string;
  title?: string;
  url?: string;
  author?: string;
  created?: number;
  ups?: number;
  downs?: number;
  icon_img?: string;
  banner_img?: string;
  selftext?: string;
  upvote_ratio?: number;
  thumbnail?: string;
}

interface IPostItem {
  data: IPostData;
}

export function CardsList() {
  const token = useSelector<RootState>((state) => state.token);
  const [posts, setPosts] = useState<IPostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorLoading, setErrorLoading] = useState<string>('');

  useEffect(() => {
    if (!token) return;

    async function load() {
      setLoading(true);
      setErrorLoading('');
      try {
        const {
          data: {
            data: { children },
          },
        } = await axios.get("https://oauth.reddit.com/hot/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit:10
          }
        });
        setPosts(children);
      } catch (error) {
        setErrorLoading(String(error));
        console.error("Failed to load posts in CardList ", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [token]);

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
         <li role="status">Sorry, we can't find anything</li>
      )}

      {posts.map(({ data }) => 
        (<Card key={data?.title} title={data?.title} author={data?.author} url={data?.url} created={data?.created} ups={data?.ups} downs={data?.downs} icon_img={data?.icon_img} banner_img={data?.thumbnail === 'nsfw' ? '' : data?.thumbnail} id={data?.id} subreddit={data?.subreddit} selftext={data?.selftext} upvote_ratio={data?.upvote_ratio} />)
      )}

      {errorLoading && (
        <li role="alert">{errorLoading}</li>
      )}
      
      {loading && (
        <li role="status">Loading...</li>
      )}
    </ul>
  );
}
