import React, { FC } from 'react'
import { useModalContext } from '../../../contexts/ModalContext/ModalContext';
import { MyButton } from '../button/MyButton'
import classes from "./ModalWindowOfErrorPost.module.css"


export const ModalWindowOfErrorPost = () => {
  const rootClasses = [classes.modalWindowOfErrorPost]
  const { modalWindowOfErrorPostIsOpen, setModalWindowOfErrorPostIsOpen } = useModalContext();

  if (modalWindowOfErrorPostIsOpen) {
    rootClasses.push(classes.active)
  }

  const exitModalWindow = () => {
    setModalWindowOfErrorPostIsOpen(false)
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.modalWindowOfErrorPostContent}>
        <p className={classes.text}>All fields must be filled!</p>
        <div className={classes.buttonBox}>
          <MyButton onClick={() => exitModalWindow()} className={classes.modalButton}>OK</MyButton>
        </div>
      </div>
    </div>
  )
}
