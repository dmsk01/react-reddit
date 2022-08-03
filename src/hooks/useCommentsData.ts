import React, { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

export interface IPostComments {}

export function useCommentsData(id?: string, subreddit?: string) {
  const token = useContext(tokenContext);

  const [postComments, setPostsComments] = useState<IPostComments[]>([]);

  let config = {};
  let url = "";
  if (token) {
    url = `https://oauth.reddit.com/${subreddit}/comments/${id}`;
    config = {
      Authorization: "bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    };
  } else {
    url = `http://api.reddit.com/${subreddit}/comments/${id}`;
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
        console.log("[useCommentsData]", resp.data);
      })
      .catch(console.log);
  }

  useEffect(() => {
    if (token == "" || typeof token == "undefined") return;
    getComments();
  }, [token]);

  return [postComments];
}
