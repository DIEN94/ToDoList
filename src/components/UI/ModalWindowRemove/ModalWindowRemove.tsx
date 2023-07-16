import React, { FC } from 'react'
import { MyButton } from '../button/MyButton';
import { IModal, MyModal } from '../MyModal/MyModal';
import classes from "./ModalWindowRemove.module.css"

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
        <MyModal {...props} className={classes.modalWindowRemoveContent}>
                <p className={classes.text}>Delete this task?</p>
                <div className={classes.buttonBox}>
                    <MyButton onClick={() => confirmRemove(true)} className={classes.modalButton}>Yes</MyButton>
                    <MyButton onClick={() => confirmRemove()} className={classes.modalButton}>No</MyButton>
            </div>
        </MyModal>
    )
})

