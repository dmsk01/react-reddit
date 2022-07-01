import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from './header.css'

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.heading}>Reddit for our own</h1>
      <p>Hello there!</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);
