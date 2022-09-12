import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser, RootState, userRequestAsync } from "../store";

export function useUserData() {
  const data = useSelector<RootState, IUser>((state) => state.user.data);
  const loading = useSelector<RootState, boolean>((state) => state.user.loading);
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === undefined || !token) return;
    dispatch<any>(userRequestAsync());
  }, [token]);

  return {
    data,
    loading,
  };
}
