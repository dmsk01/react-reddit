import React, { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

export interface IPostComments {}

export function useCommentsData(id?: string) {
  const token = useContext(tokenContext);

  const [postComments, setPostsComments] = useState<IPostComments[]>([]);

  useEffect(() => {
    axios
      .get(`https://oauth.reddit.com/comments/${id}`, {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then((resp) => {
        console.log("[useCommentsData]", resp.data);
      })
      .catch(console.log);
  }, [token]);

  return [postComments];
}
