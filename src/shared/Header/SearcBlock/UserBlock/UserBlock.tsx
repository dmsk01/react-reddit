import React from "react";
import { Break } from "../../../Break";
import { AnonIcon } from "../../../Icons";
import { Text, EColor } from "../../../Text";

import styles from "./userBlock.scss";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      className={styles.userBox}
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <AnonIcon />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.gray99}>
          {username || "Anonimous"}
        </Text>
      </div>
    </a>
  );
}

export default UserBlock;
