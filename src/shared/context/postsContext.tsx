import React, { createContext } from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostsContextData {
  title: string,
  url: string,
  author: string,
  created: string,
  ups: number,
  downs: number,
  sr_detail: {
    icon_img?: string;
    banner_img?: string;
  }
}

export const postsContext = createContext<Partial<IPostsContextData[]>>([]);

export function PostsContextProvider({children}:{children:React.ReactNode}) {
  const [data] = usePostsData();

  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  )
}

