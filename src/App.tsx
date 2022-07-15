import React from "react";
import { hot } from "react-hot-loader/root";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";

import "./main.global.scss";
import { CardsList } from "./shared/CardsList";
import { generateId } from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList";
import merge from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";

const LIST = [
  { As: "li" as const, text: "some" },
  { As: "li" as const, text: "other some" },
  { As: "li" as const, text: "some" },
].map(generateId);

function AppComponent() {
  const [list, setList] = React.useState(LIST);
  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
        <Dropdown
          onOpen={() => console.log("opened")}
          onClose={() => console.log("closed")}
          button={<button type="button">test</button>}
        >
          <ul>
            <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
          </ul>
        </Dropdown>
      </Layout>
    </div>
  );
}

export const App = hot(() => <AppComponent />);
