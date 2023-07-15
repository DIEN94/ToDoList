import React, { FC } from 'react'
import { ModalWindowOfErrorPost } from './UI/ModalWindowOfErrorPost/ModalWindowOfErrorPost'
import { ModalWindowRedactor } from './UI/ModalWindowRedactor/ModalWindowRedactor'
import { ModalWindowRemove } from './UI/ModalWindowRemove/ModalWindowRemove'
import { useModalContext } from '../contexts/ModalContext/ModalContext'

interface IModals{
    redactorPost: (id: number, title: string, body: string) => void;
    removePost: (id: number) => void;
}

export const Modals: FC<IModals> = ({redactorPost, removePost}) => {
    const {isOpen,openModal,closeModal,modalName} = useModalContext()
    // if(!isOpen) return null
  return (
    <div>
    <ModalWindowOfErrorPost isOpen={modalName.current === "error"} onClose={closeModal}/>
    <ModalWindowRedactor redactorPost={redactorPost} isOpen={modalName.current === "redactor"} onClose={closeModal}/> 
    <ModalWindowRemove removePost={removePost} isOpen={modalName.current === "remove"} onClose={closeModal}/>
    </div>
  )
}
