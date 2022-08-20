import React from "react";
import { Break } from "../../../Break";
import { AnonIcon } from "../../../Icons";
import { Text, EColor } from "../../../Text";

import styles from "./userBlock.scss";

interface IUserBlockProps {
  iconImg?: string;
  name?: string;
}

function UserBlock({ iconImg, name }: IUserBlockProps) {
  return (
    <a className={styles.userBox} href={"https://www.reddit.com/api/v1/authorize?client_id=" + process.env.CLIENT_ID + "&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit"}>
      <div className={styles.avatarBox}>{iconImg ? <img src={iconImg} alt="user avatar" className={styles.avatarImage} /> : <AnonIcon />}</div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={name ? EColor.black : EColor.gray99}>
          {name}
        </Text>
      </div>
    </a>
  );
}

export default UserBlock;
