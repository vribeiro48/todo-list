import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

interface Task {
  name: string;
}

export function Task(props: Task) {
  return (
    <li className={styles.task}>
      <div className={styles.inputTaskName}>
        <span>
          <input type="checkbox" />
        </span> 
        <span>
          {props.name}
        </span>
      </div>
      <div>
        <Trash />
      </div>
    </li>
  )
}