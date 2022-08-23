import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, userRequest, userRequestError, userRequestSuccess } from "../store";

export function useUserData() {
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();

  function getUserData() {
    if (!token) return;

    dispatch(userRequest());
    axios
      .get("https://oauth.reddit.com/api/v1/me.json", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        const userData = resp.data;
        const data = { name: userData.name, iconImg: userData.snoovatar_img };
        // if (Object.values(data).every((field) => field)) {
        dispatch(userRequestSuccess(data));
        // }
      })
      .catch((e) => {
        console.log("[useUserData.js - failed to load user name & avatar] ", e);
        dispatch(userRequestError(String(e)));
      });
  }
  useEffect(() => {
    // if (token === "" || typeof token === "undefined" || token.length === 0) return;

    getUserData();
  }, [token]);
}
