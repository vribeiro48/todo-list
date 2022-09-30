import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

interface TaskProps {
  content: string;
}

export function Task(props: TaskProps) {
  return (
    <li className={styles.task}>
      <div className={styles.inputTaskName}>
        <span>
          <input type="checkbox" />
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