import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { updateComment } from "../../../store/comment/action";
import { CommentForm } from "../CommentForm/CommentForm";

interface IReplyFormContainer {
  author?: string;
  comment?: string;
}

export function ReplyFormContainer({ author }: IReplyFormContainer) {
  const value = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return <CommentForm author={author} value={value} onChange={handleChange} onSubmit={handleSubmit} />;
}
