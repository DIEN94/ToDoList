import React, { FC, useEffect, useRef, useState } from "react";
import classes from "./MyModal.module.css";

export interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const MyModal: FC<IModal> = ({ children, isOpen, onClose }) => {
  const [open, setOpen] = useState(isOpen);

  const rootClasses = [classes.myModal];

  if (open) {
    rootClasses.push(classes.active);
  }
  if (!isOpen) {
    rootClasses.push(classes.hide);
  }

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  if (!open) return null;
  return (
    <div
      onTransitionEnd={() => {
        // const fn = onClose;
        setOpen(false);
        onClose();
        console.log("end");
      }}
      className={rootClasses.join(" ")}
    >
      {children}
    </div>
  );
};
