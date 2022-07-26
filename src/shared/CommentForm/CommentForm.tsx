import React, { ChangeEvent, useContext } from "react";
import { commentContext } from "../context/commentContext";

import styles from "./commentForm.scss";

function CommentForm() {
  const { value, onChange } = useContext(commentContext);
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange && onChange(event.target.value);
  }
  return (
    <form className={styles.form}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Comment
      </button>
    </form>
  );
}

export default CommentForm;
