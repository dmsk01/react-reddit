import React from "react";

import { GenericList } from "../../GenericList";
import { Dropdown } from "../../Dropdown";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import merge from "../../../../utils/js/merge";

import styles from "./menu.scss";
import Text, { EColor } from "../../Text/Text";
import MenuItemsList from "./MenuItemsList/MenuItemsList";
import { MenuIcon } from "../../Icons";

const LIST = [
  { As: "li" as const, text: "some" },
  { As: "li" as const, text: "other some" },
  { As: "li" as const, text: "some" },
].map(generateId);

function MenuButton() {
  return (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  );
}

export function Menu() {
  const [list, setList] = React.useState(LIST);
  const handleItemClick = (id: string) => {
    // setList(list.filter((item) => item.id !== id));
    console.log(id, " clicked!");
  };

  return (
    <div className={styles.menu}>
      <Dropdown
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        button={<MenuButton />}
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="asdf123" />
          <button className={styles.closeButton}>
            <Text size={14} mobileSize={12} color={EColor.gray66}>
              Close
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
