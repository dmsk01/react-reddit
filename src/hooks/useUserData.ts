import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const token = useSelector<RootState, string>((state) => state.token);

  const [data, setData] = useState<IUserData>({});

  function getUserData() {
    axios
      .get("https://oauth.reddit.com/api/v1/me.json", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        const userData = resp.data;
        setData({ name: userData.name, iconImg: userData.snoovatar_img });
      })
      .catch(console.log);
  }

  useEffect(() => {
    // if (token !== "" && typeof token !== "undefined") return;

    getUserData();
  }, [token]);

  return [data];
}
