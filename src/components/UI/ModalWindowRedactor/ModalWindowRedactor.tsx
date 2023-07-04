
import React, { ChangeEvent, FC, useState, useMemo } from 'react'
import { MyButton } from '../button/MyButton';
import classes from "./ModalWindowRedactor.module.css"
import { MyInput } from './../input/MyInput';
import { useModalContext } from '../../../contexts/ModalContext/ModalContext';

interface IModalWindowRedactor {
  redactorPost: (id: number, title: string, body: string) => void;
}

export const ModalWindowRedactor: FC<IModalWindowRedactor> = ({ redactorPost }) => {
  const { modalWindowRedactorIsOpen, setModalWindowRedactorIsOpen } = useModalContext();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useMemo(() => {
    setId(localStorage.getItem('id') || '');
    setTitle(localStorage.getItem('title') || '');
    setBody(localStorage.getItem('body') || '');
  }, [modalWindowRedactorIsOpen])

  const rootClasses = [classes.modalWindowRedactor]
  if (modalWindowRedactorIsOpen) {
    rootClasses.push(classes.active)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    redactorPost(Number(id), String(title), String(body))
    setModalWindowRedactorIsOpen(false)
    setId('');
    setTitle('');
    setBody('');
  }

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const closeModalWindow = () => {
    setModalWindowRedactorIsOpen(false)
  }

  return (
    <div className={rootClasses.join(' ')}>

      <form onSubmit={handleSubmit} className={classes.modalWindowRedactorContent} >
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
          className={classes.textarea}>
        </textarea>
        <div className={classes.buttonBox}>
          <MyButton onClick={() => closeModalWindow()} className={classes.modalButton}>Cancel</MyButton>
          <MyButton type="submit" className={classes.modalButton}>Save</MyButton>
        </div>
      </form>
    </div>
  )
}




// const [id, setId] = useState(localStorage.getItem('id'));
// const [title, setTitle] = useState(localStorage.getItem('title'));
// const [body, setBody] = useState(localStorage.getItem('body'));

//   const {id, title, body} =  useMemo(()=>{
//     const id = localStorage.getItem('id');
//     const title = localStorage.getItem('title');
//     const body = localStorage.getItem('body');
//     return {id, title,body}
//   },[visible])

//     localStorage.setItem("currentPost",JSON.stringify(obj))
//    const currPostAsString = localStorage.getItem("currentPost") || "";
//    const currPostObj = JSON.parse(currPostAsString)