import React, { ChangeEvent, FC, useState, useMemo, useEffect } from "react";
import { MyButton } from "../button/MyButton";
import classes from "./ModalWindowRedactor.module.css";
import { MyInput } from "./../input/MyInput";
import { IModal, MyModal } from "../MyModal/MyModal";

interface IModalWindowRedactor extends Omit<IModal, "children"> {
  redactorPost: (id: number, title: string, body: string) => void;
}
const Content = ({
  onClose,
  redactorPost,
}: {
  redactorPost: IModalWindowRedactor["redactorPost"];
  onClose: IModalWindowRedactor["onClose"];
}) => {
  const [id, setId] = useState(localStorage.getItem("id") || "");
  const [title, setTitle] = useState(localStorage.getItem("title") || "");
  const [body, setBody] = useState(localStorage.getItem("body") || "");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    redactorPost(Number(id), String(title), String(body));
    onClose();
    // setId('');
    // setTitle('');
    // setBody('');
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const closeModalWindow = () => {
    onClose();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={classes.modalWindowRedactorContent}
      >
        <p className={classes.text}>Title:</p>
        <MyInput
          value={title}
          onChange={handleChangeTitle}
          placeholder="Title..."
        />
        <p className={classes.text}>About:</p>
        <textarea
          value={String(body)}
          onChange={handleChangeBody}
          placeholder="About..."
          className={classes.textarea}
        ></textarea>
        <div className={classes.buttonBox}>
          <MyButton type="submit" className={classes.modalButton}>
            Save
          </MyButton>
          <MyButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeModalWindow();
            }}
            className={classes.modalButton}
          >
            Cancel
          </MyButton>
        </div>
      </form>
    </>
  );
};
export const ModalWindowRedactor: FC<IModalWindowRedactor> = React.memo(
  ({ ...props }: IModalWindowRedactor) => {
    // useMemo(() => {
    //   setId(localStorage.getItem("id") || "");
    //   setTitle(localStorage.getItem("title") || "");
    //   setBody(localStorage.getItem("body") || "");
    // }, [props.isOpen]);
    // useMemo(() => {
    //   setTimeout (()=>{
    //     setId(localStorage.getItem('id') || '');
    //     setTitle(localStorage.getItem('title') || '');
    //     setBody(localStorage.getItem('body') || '');
    //   }, 500)
    // }, [props.isOpen])

    return (
      <MyModal {...props}>
        <Content onClose={props.onClose} redactorPost={props.redactorPost} />
      </MyModal>
    );
  }
);