import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store";

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
  const token = useSelector<RootState, string>((state) => state.token);

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
      .catch((e) => console.log("[useCommentsData.js - failed to load user post comments] ", e));
  }

  useEffect(() => {
    if (token == "" || typeof token == "undefined") return;
    getComments();
  }, [token]);

  return [postComments];
}
