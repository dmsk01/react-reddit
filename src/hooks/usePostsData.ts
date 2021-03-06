import React, { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

export interface ISkillRanking {
  icon_img?: string;
  banner_img?: string;
}

interface IPostObject {
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
  sr_detail?: ISkillRanking;
}

export function usePostsData() {
  const token = useContext(tokenContext);

  const [postsData, setPostsData] = useState<IPostData[]>([]);

  function getPostData(token: string) {
    axios
      .get("https://oauth.reddit.com/best.json?limit=10&sr_detail=true", {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then((resp) => {
        console.log(resp.data.data.children);
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
        }));
        setPostsData(recievedPosts);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getPostData(token);
  }, [token]);

  return [postsData];
}

