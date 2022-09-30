import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'
import styles from './TaskList.module.css'

import { PlusCircle } from 'phosphor-react'


export function TaskList() {
  const [tasks, setTasks] = useState([
    'Limpar quarto',
    'Varrer sala',
    'Organizar armário',
    'Ir no mercado'
  ])

  const [newTaskText, setNewTaskText] = useState('');

  const [taskCreatedCounter, setTaskCreatedCounter] = useState(tasks.length);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    
    setTasks([...tasks, newTaskText])
    setNewTaskText('')
    setTaskCreatedCounter(tasks.length+1)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  return (
    <div className={styles.wrapperTaskList}>
      <form className={styles.container} onSubmit={handleCreateNewTask}>
        <input className={styles.input} type="text" value={newTaskText} onChange={handleNewTaskChange} placeholder="Adicione uma nova tarefa" required />
        <button type="submit">Criar <PlusCircle size={16} /></button>
      </form>
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
              return <Task content={task} />
            })
          }
        </ul>
      </div>

    </div>
  )
}