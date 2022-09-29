import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

export function Task() {
  return (
    <li className={styles.task}>
      <div className={styles.inputTaskName}>
        <span>
          <input type="checkbox" />
        </span> 
        <span>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. 
        </span>
      </div>
      <div>
        <Trash />
      </div>
    </li>
  )
}