import React, { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

export interface ICommentData {
  created?: number;
  id?: string;
  selftext_html?: string;
  body?: string;
  title?: string;
  author?: string;
}

export interface IPostComments {
  kind?: string;
  data?: ICommentData;
}

export function useCommentsData(id?: string) {
  const token = useContext(tokenContext);

  const [postComments, setPostsComments] = useState<IPostComments[]>([]);

  let config = {};
  let url = "";
  if (token) {
    url = `https://oauth.reddit.com/comments/${id}`;
    config = {
      Authorization: "bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    };
  } else {
    url = `http://api.reddit.com/comments/${id}`;
    config = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  }

  function getComments() {
    axios
      .get(url, {
        headers: config,
      })
      .then((resp) => {
        setPostsComments(resp?.data[1]?.data?.children);
      })
      .catch(console.log);
  }

  useEffect(() => {
    if (token == "" || typeof token == "undefined") return;
    getComments();
  }, [token]);

  return [postComments];
}
