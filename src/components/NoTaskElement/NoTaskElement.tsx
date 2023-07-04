import React from 'react'
import classes from "./NoTaskElement.module.css"

export const NoTaskElement = () => {
  return (
    <div>
      <hr className={classes.hr} />
      <p className={classes.NoTasksElement}>No tasks</p>
      <hr className={classes.hr} />
    </div>
  )
}
