import React from "react";
import { BlockIcon, WarningIcon } from "../../../Icons";
import { EColor, Text } from "../../../Text";

import styles from "./menuItemsList.scss";

interface IMenuItemsListProps {
  postId: string;
}

function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <Text size={12} color={EColor.gray99}>
          Hide
        </Text>
      </li>
      <li className={styles.divider}></li>
      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={12} color={EColor.gray99}>
          Report
        </Text>
      </li>
    </ul>
  );
}

export default MenuItemsList;
