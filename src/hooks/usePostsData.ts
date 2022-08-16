import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface ISkillRanking {
  icon_img?: string;
  banner_img?: string;
}

export interface IPostObject {
  data?: IPostData;
}

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
  sr_detail?: ISkillRanking;
}

interface IGetPostDataConfig {
  [key: string]: string;
}

export function usePostsData() {
  const token = useSelector<RootState, string>((state) => state.token);

  const [postsData, setPostsData] = useState<IPostData[]>([]);

  let config = {};
  let url = "";
  if (token) {
    url = "https://oauth.reddit.com/best.json?sr_detail=true";
    config = {
      Authorization: "bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    };
  } else {
    url = "https://www.reddit.com/r/redditdev/best.json?sr_detail=true";
    config = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  }

  function getPostData(url: string, config: IGetPostDataConfig) {
    axios
      .get(url, {
        headers: config,
      })
      .then((resp) => {
        const recievedPosts = resp.data.data.children.map(({ data }: IPostObject) => ({
          title: data!.title,
          url: data!.url,
          author: data!.author,
          created: data!.created,
          ups: data!.ups,
          downs: data!.downs,
          icon_img: data!.sr_detail!.icon_img,
          banner_img: data!.sr_detail!.banner_img,
          id: data!.id,
          subreddit: data!.subreddit,
          selftext: data!.selftext,
          upvote_ratio: data!.upvote_ratio,
        }));
        setPostsData(recievedPosts);
      })
      .catch(console.log);
  }

  useEffect(() => {
    if (token !== "" && typeof token !== "undefined") return;

    getPostData(url, config);
  }, [token]);

  return [postsData];
}
