import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <div className={styles.wrapperTaskList}>
      <div className={styles.taskCounter}>
        <div>
          <span className={styles.taskCreated}>Tarefas criadas</span> <span className={styles.taskCreatedCounter}>0</span>
        </div>
        <div>
          <span className={styles.taskDone}>Concluídas</span> <span className={styles.taskDoneCounter}>0</span>
        </div>
      </div>

      <div className={styles.taskList}>
        <ul>
          <Task />
          <Task />
          <Task />
        </ul>
      </div>

    </div>
  )
}