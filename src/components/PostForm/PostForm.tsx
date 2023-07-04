import React, { useContext, useState } from "react";
import { MyInput } from "../UI/input/MyInput";
import { MyButton } from "../UI/button/MyButton";
import { Post } from "../../type";
import css from "./PostForm.module.css";
import { useModalContext } from './../../contexts/ModalContext/ModalContext';

interface IPostForm {
  create: (newPost: Post) => void
}

export const PostForm = ({ create }: IPostForm) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { modalWindowOfErrorPostIsOpen, setModalWindowOfErrorPostIsOpen } = useModalContext();

  const addNewPost = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    {
      newPost.title && newPost.body
      ?
      (create(newPost))
      :
      (setModalWindowOfErrorPostIsOpen(true))
    }

    setTitle('')
    setBody('')
  };

  return (
    <form className={css.form}>
      <div className={css.inputBox}>
        <MyInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title..."
        />
        <MyInput
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="About..."
        />
      </div>
      <MyButton className={css.buttonForm} onClick={addNewPost}>+</MyButton>
    </form>
  );
};
