import styles from './Task.module.css'

import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react';

interface TaskProps {
  content: string;
}

export function Task(props: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleTaskDone(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setIsChecked(true)
    }
    else {
      setIsChecked(false)
    }
  }

  return (
    <li className={`${styles.task} ${isChecked ? styles.taskDone : styles.taskToDo }`}>
      <div className={styles.inputTaskName}>
        <span>
          <input type="checkbox" onChange={handleTaskDone} checked={isChecked} />
        </span> 
        <span>
          {props.content}
        </span>
      </div>
      <div>
        <Trash />
      </div>
    </li>
  )
}
