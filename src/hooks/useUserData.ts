import React, { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const token = useContext(tokenContext);

  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
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
  }, [token]);

  return [data];
}
