import React from "react";
import { Break } from "../../../Break";
import { Text, EColor } from "../../../Text";

import styles from "./userBlock.scss";

interface IUserBlockProps {
  iconImg?: string;
  name?: string;
  loading?: boolean;
}

function UserBlock({ iconImg, name, loading }: IUserBlockProps) {
  return (
    <a className={styles.userBox} href={"https://www.reddit.com/api/v1/authorize?client_id=" + process.env.CLIENT_ID + "&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit"}>
      <div className={styles.avatarBox}>
        <img src={iconImg || "https://www.redditstatic.com/avatars/avatar_default_01_FF4500.png"} alt="user avatar" className={styles.avatarImage} />
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColor.gray99}>
            Loading...
          </Text>
        ) : (
          <Text size={20} color={name ? EColor.black : EColor.gray99}>
            {name || "Anonimous"}
          </Text>
        )}
      </div>
    </a>
  );
}

export default UserBlock;
