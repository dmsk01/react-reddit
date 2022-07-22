import React, { useState, useEffect } from 'react';
import axios from "axios";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(token: string) {
  const [data, setData] = useState<IUserData>({});
  useEffect(() => {
    if (token && token.length > 0 && token != undefined) {
      axios
        .get("https://oauth.reddit.com/api/v1/me", {
          headers: {
            Authorization: "bearer " + token,
          },
        })
        .then((resp) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.snoovatar_img });
        })
        .catch(console.log);
    } else {
      console.log("Not logged in yet");
    }
  }, [token]);

  return [data];
}
