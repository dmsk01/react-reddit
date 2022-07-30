import React from "react";
import styles from "./preview.scss";

interface IPreviewProps {
  banner_img?: string;
}

export function Preview({ banner_img }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={
          banner_img ||
          'https://images.ctfassets.net/lzny33ho1g45/how-to-use-reddit-p-img/53846daa58db6447804f4b21d55d4a1f/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760'
        }
        alt="Post image"
      />
    </div>
  );
}
