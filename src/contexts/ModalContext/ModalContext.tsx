import React, { createContext, useState, useContext, useRef } from 'react';
type ModalName = "remove" | "error" | "redactor"
interface ModalContextType {
  isOpen: boolean;
  openModal: (name:ModalName) => void;
  closeModal: () => void;
  modalName:React.MutableRefObject<ModalName | null>
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
  const [isOpen, setIsOpen] = useState(false);
  const modalNameRef = useRef<ModalName | null>(null)

  const openModal = (name:ModalName): void => {
    modalNameRef.current = name;
    setIsOpen(true);
  };

  const closeModal = (): void => {
    modalNameRef.current = null;
    setIsOpen(false);
  };

  const modalContextValue: ModalContextType = {
    isOpen,
    modalName:modalNameRef,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};