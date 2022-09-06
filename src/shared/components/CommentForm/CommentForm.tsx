import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./commentForm.scss";
import CommentActions from "./CommentActions/CommentActions";

interface ICommentForm {
  author?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (event: FormEvent) => void;
}

export function CommentForm({ author }: ICommentForm) {
  const [value, setValue] = useState<string>("");
  const [touched, setTouched] = useState(false);
  // const [valueError, setValueError] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      commentText: "",
    },
  });

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   setTouched(true);

  //   setValueError(validateValue());

  //   const isFormValid = !validateValue();
  //   if (!isFormValid) return;

  //   alert("Form sended");
  //   setValue("");
  // }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      {/* <form className={styles.form}>
         <textarea ref={ref} id="textarea" className={styles.input} value={value} onChange={handleChange} aria-invalid={valueError ? "true" : undefined} /> {touched && valueError && <div>{validateValue()}</div>}
        {!value && (
          <label className={styles.textareaLabel} htmlFor="#textarea">
            <span>{author && author + ", "}</span>
            leave your comment
          </label>
        )}  <div className={styles.formBottom}>
          <div className={styles.actionsContainer}>
            <CommentActions />
          </div>
          <button className={styles.button} type="submit">
            Comment
          </button>
        </div> 
      </form>*/}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("commentText", { required: "This is required", minLength: { value: 3, message: "Min length is 3" } })} className={styles.input} aria-invalid={errors.commentText?.message ? "true" : undefined} />
        <p>{errors.commentText?.message}</p>
        <div className={styles.formBottom}>
          <div className={styles.actionsContainer}>
            <CommentActions />
          </div>
          <button className={styles.button} type="submit">
            Comment
          </button>
        </div>
      </form>
    </>
  );
}
