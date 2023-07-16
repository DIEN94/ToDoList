import React, { FC } from "react";
import { MyButton } from "../button/MyButton";
import { IModal, MyModal } from "../MyModal/MyModal";
import classes from "./ModalWindowOfErrorPost.module.css";

interface IProps extends Omit<IModal,"children"> {}

export const ModalWindowOfErrorPost = React.memo(({...props}: IProps) => {
  const exitModalWindow = () => {
    props.onClose();
  };

  return (
    <MyModal {...props } className={classes.modalWindowOfErrorPostContent}>
      <p className={classes.text}>All fields must be filled!</p>
        <div className={classes.buttonBox}>
          <MyButton onClick={exitModalWindow} className={classes.modalButton}>
            OK
          </MyButton>
        </div>
    </MyModal>
  );
});
