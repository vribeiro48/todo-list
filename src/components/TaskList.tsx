import { useState } from 'react'
import { Task } from './Task'
import styles from './TaskList.module.css'

const tasks = [
  {
    name: 'Limpar quarto'
  },
  {
    name: 'Varrer sala'
  },
  {
    name: 'Organizar armário'
  },
  {
    name: 'Ir no mercado'
  }
]

export function TaskList() {
  const [taskCreatedCounter, setTaskCreatedCounter] = useState(0);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);

  return (
    <div className={styles.wrapperTaskList}>
      <div className={styles.taskCounter}>
        <div>
          <span className={styles.taskCreated}>Tarefas criadas</span> <span className={styles.taskCreatedCounter}>{taskCreatedCounter}</span>
        </div>
        <div>
          <span className={styles.taskDone}>Concluídas</span> <span className={styles.taskDoneCounter}>{taskDoneCounter}</span>
        </div>
      </div>

      <div className={styles.taskList}>
        <ul>
          {
            tasks.map(task => {
              return <Task name={task.name} />
            })
          }
        </ul>
      </div>

    </div>
  )
}