import React, { FC } from 'react'
import { useModalContext } from '../../../contexts/ModalContext/ModalContext';
import { MyButton } from '../button/MyButton';
import classes from "./ModalWindowRemove.module.css"
import { IModal, MyModal } from '../MyModal/MyModal';

interface IModalWindowRemove extends Omit<IModal,"children"> {
    removePost: (id: number) => void;
}

export const ModalWindowRemove: FC<IModalWindowRemove> = React.memo (({ ...props }: IModalWindowRemove) => {

    const confirmRemove = (isRemovePost?: boolean) => {
        if (isRemovePost) {
            const deleteId = localStorage.getItem('deleteId')
            props.removePost(Number(deleteId))
        }
        props.onClose()
    }

    return (
        <MyModal {...props}>
            <div className={classes.modalWindowRemoveContent}>
                <p className={classes.text}>Delete this task?</p>
                <div className={classes.buttonBox}>
                    <MyButton onClick={() => confirmRemove(true)} className={classes.modalButton}>Yes</MyButton>
                    <MyButton onClick={() => confirmRemove()} className={classes.modalButton}>No</MyButton>
                </div>
            </div>
        </MyModal>
    )
})

