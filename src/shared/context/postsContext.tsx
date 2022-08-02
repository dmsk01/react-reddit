import React, { createContext } from "react";
import { usePostsData } from "../../hooks/usePostsData";

export interface IPostsContextData {
  id?: string;
  title?: string;
  url?: string;
  author?: string;
  created?: number;
  ups?: number;
  downs?: number;
  icon_img?: string;
  banner_img?: string;
  sr_detail?: {
    icon_img?: string;
    banner_img?: string;
  };
}

export const postsContext = createContext<IPostsContextData[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = usePostsData();

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
