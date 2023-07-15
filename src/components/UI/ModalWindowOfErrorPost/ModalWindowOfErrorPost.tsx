import React, { FC } from "react";
import { MyButton } from "../button/MyButton";
import classes from "./ModalWindowOfErrorPost.module.css";
import { IModal, MyModal } from "../MyModal/MyModal";

interface IProps extends Omit<IModal,"children"> {}

export const ModalWindowOfErrorPost = React.memo(({ ...props}: IProps) => {
  const exitModalWindow = () => {
    props.onClose();
  };

  // if (!props.isOpen) return null;
  return (
    <MyModal {...props}>
      <div className={classes.modalWindowOfErrorPostContent}>
        <p className={classes.text}>All fields must be filled!</p>
        <div className={classes.buttonBox}>
          <MyButton onClick={exitModalWindow} className={classes.modalButton}>
            OK
          </MyButton>
        </div>
      </div>
    </MyModal>
  );
});
