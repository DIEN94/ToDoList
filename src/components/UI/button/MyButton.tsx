import React, { FC } from 'react'
import classes from "./MyButton.module.css"

type DefaultButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
interface IButton extends DefaultButtonPropsType {
  children: string
}

export const MyButton: FC<IButton> = ({ children, className, ...props }) => {
  const rootClasses = [classes.myButton, className]

  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  )
}
