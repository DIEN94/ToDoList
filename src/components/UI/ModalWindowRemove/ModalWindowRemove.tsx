import React, { FC } from 'react'
import { useModalContext } from '../../../contexts/ModalContext/ModalContext';
import { MyButton } from '../button/MyButton';
import classes from "./ModalWindowRemove.module.css"

interface IModalWindowRemove {
    removePost: (id: number) => void;
}

export const ModalWindowRemove: FC<IModalWindowRemove> = ({ removePost }) => {
    
    const { modalWindowRemoveIsOpen, setModalWindowRemoveIsOpen } = useModalContext();
    const rootClasses = [classes.modalWindowRemove]
    if (modalWindowRemoveIsOpen) {
        rootClasses.push(classes.active)
    }

    const confirmRemove = (isRemovePost?: boolean) => {
        if (isRemovePost) {
            const deleteId = localStorage.getItem('deleteId')
            removePost(Number(deleteId))
        }
        setModalWindowRemoveIsOpen (false)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.modalWindowRemoveContent}>
                <p className={classes.text}>Delete this task?</p>
                <div className={classes.buttonBox}>
                    <MyButton onClick={() => confirmRemove(true)} className={classes.modalButton}>Yes</MyButton>
                    <MyButton onClick={() => confirmRemove()} className={classes.modalButton}>No</MyButton>
                </div>
            </div>
        </div>
    )
}
