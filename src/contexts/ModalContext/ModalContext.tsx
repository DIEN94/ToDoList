import React, { createContext, useState, useContext } from 'react';

interface ModalContextType {
  modalWindowRemoveIsOpen: boolean;
  setModalWindowRemoveIsOpen: (isOpen: boolean) => void;

  modalWindowOfErrorPostIsOpen: boolean;
  setModalWindowOfErrorPostIsOpen: (isOpen: boolean) => void;

  modalWindowRedactorIsOpen: boolean;
  setModalWindowRedactorIsOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalWindowRemoveIsOpen, setModalWindowRemoveIsOpen] = useState(false);
  const [modalWindowOfErrorPostIsOpen, setModalWindowOfErrorPostIsOpen] = useState(false);
  const [modalWindowRedactorIsOpen, setModalWindowRedactorIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{
      modalWindowRemoveIsOpen, setModalWindowRemoveIsOpen,
      modalWindowOfErrorPostIsOpen, setModalWindowOfErrorPostIsOpen,
      modalWindowRedactorIsOpen, setModalWindowRedactorIsOpen
    }}>
      {children}
    </ModalContext.Provider>
  );
};