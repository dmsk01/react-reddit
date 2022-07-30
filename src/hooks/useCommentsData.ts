import React, { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

export interface IPostComments {}

export function useCommentsData() {
  const token = useContext(tokenContext);

  const [postComments, setPostsComments] = useState<IPostComments[]>([]);

  function getPostComments(id: string, subreddit: string) {
    axios
      .get(`https://oauth.reddit.com/${subreddit}/comments/${id}`, {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then((resp) => {})
      .catch(console.log);
  }

  useEffect(() => {
    // getPostComments();
  }, [token]);

  return [postComments];
}

// https://oauth.reddit.com/${subreddit}/comments/${postId}
