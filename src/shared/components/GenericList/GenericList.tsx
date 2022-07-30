import React from "react";

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className?: string;
  As?: "a" | "button" | "div" | "li";
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = "div", id, text, onClick, className, href }) => (
        <As
          key={id}
          className={className}
          onClick={() => onClick(id)}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
