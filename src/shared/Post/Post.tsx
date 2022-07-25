import React from "react";
import ReactDOM from "react-dom";

import styles from "./post.scss";

function Post() {
    const node = document.getElementById("modal_root");
    if(!node) return null;

  return ReactDOM.createPortal(
    (<div className={styles.modal}>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        repellendus ea laborum eius rerum hic inventore. Alias magni cupiditate
        culpa odit accusamus! Ipsa cum amet officia error, aperiam corrupti
        consequuntur?
      </h2>
      <div className={styles.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo
          vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta
          repellendus, voluptates qui maxime quaerat labore magni perspiciatis,
          obcaecati sit!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo
          vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta
          repellendus, voluptates qui maxime quaerat labore magni perspiciatis,
          obcaecati sit!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo
          vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta
          repellendus, voluptates qui maxime quaerat labore magni perspiciatis,
          obcaecati sit!
        </p>
      </div>
    </div>),node
  );
}

export default Post;
