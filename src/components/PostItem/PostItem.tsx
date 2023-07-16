import React, { FC, useState } from "react";
import { useModalContext } from "../../contexts/ModalContext/ModalContext";
import redactorImg from './img/Edit.png';
import classes from "./PostItem.module.css";

interface IPostItem {
  id: number;
  title: string;
  body: string;
  key: number;
}

export const PostItem: FC<IPostItem> = ({ id, title, body, key }) => {
  const {isOpen,openModal,closeModal,modalName} = useModalContext()
  const onRemoveClickHandler = () => {
    openModal("remove")
    localStorage.setItem('deleteId', String(id))
  };

  const onRedactorClickHandler = () => {
    localStorage.setItem('id', String(id))
    localStorage.setItem('title', String(title))
    localStorage.setItem('body', String(body))
    openModal("redactor")
  };

  return (
    <div className={classes.post}>
      <div className={classes.postContent}>
        <strong className={classes.titleText}>{title}</strong>
        <div className={classes.contentText}>{body}</div>
      </div>
      <button onClick={onRedactorClickHandler} className={classes.postButton}>
        <img src={redactorImg} />
      </button>
      <button onClick={onRemoveClickHandler} className={classes.postButton}>
        X
      </button>
    </div>
  );
};
