import styles from './Task.module.css'

import { CheckCircle, Trash } from 'phosphor-react'

interface TaskProps {
  id: string;
  name: string;
  done: boolean;
  onDeleteTask: (taskId: string) => void;
  onTaskDone: (taskId: string) => void;
}

export function Task({ id, name, done, onDeleteTask, onTaskDone}: TaskProps) {
  return (    
    <div className={`${styles.task} ${done ? styles.taskDone : ""}`}>
      <button className={styles.checkContainer} onClick={() => onTaskDone(id)} >
        {done ? <CheckCircle /> : <div />}
      </button>
      <p className={`${done ? styles.taskDoneText : ""}`}>
        {name}
      </p>
      <div className={styles.deleteIcon}>
        <Trash onClick={() => onDeleteTask(id)} />
      </div>
    </div>
  )
}
