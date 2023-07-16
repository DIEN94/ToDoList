import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import classes from "./MyModal.module.css";
import { useClickOutside } from "../../../hooks";


export interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const MyModal: FC<IModal> = ({ children, isOpen, onClose, className }) => {
  const [open, setOpen] = useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);
  const rootClasses = [classes.myModal];

  if (open) {
    rootClasses.push(classes.active);
  }
  if (!isOpen) {
    rootClasses.push(classes.hide);
  }

  useClickOutside(ref, onClose)

    useEffect(() => {
      if (isOpen) {
        setOpen(isOpen);
      }
    }, [isOpen]);

    if (!open) return null;



  return (
    <div
      onTransitionEnd={() => {setOpen(false); onClose();}}
      className={rootClasses.join(" ")}
      >
      <div className = {className} ref={ref}>
        {children} 
      </div>
    </div>
  );
};
