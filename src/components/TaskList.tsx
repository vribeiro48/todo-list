import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import styles from './TaskList.module.css'

import { PlusCircle } from 'phosphor-react'

interface TaskProps {
  id: string;
  name: string;
  done: boolean;
}



export function TaskList() {
  const [listRef] = useAutoAnimate<HTMLDivElement>()
  
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: '1',
      name: 'Limpar quarto',
      done: false
    },
    {
      id: '2',
      name: 'Varrer sala',
      done: false
    },
    {
      id: '3',
      name: 'Organizar armário',
      done: false
    },
    {
      id: '4',
      name: 'Ir no mercado',
      done: true
    }
  ])

  const [newTaskText, setNewTaskText] = useState('');

  const taskCreatedCounter = tasks.length
  const taskDoneCounter = tasks.filter((task) => task.done).length

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      name: newTaskText,
      done: false
    }

    const tasksDone = tasks.filter((task => task.done === true))
    const tasksToDo = tasks.filter((task => task.done === false))

    const newTasksOrderedByToDo = tasksToDo.concat(newTask).concat(tasksDone)
    
    setTasks(newTasksOrderedByToDo)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleDeleteTask(taskId: string){ 
    const newTasks = tasks.filter((task => task.id !== taskId))
    setTasks(newTasks)
  }

  function handleTaskDone(taskId: string){
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        task.done = !task.done
        return task
      }
      return task
    })

    const tasksDone = newTasks.filter((task => task.done === true))
    const tasksToDo = newTasks.filter((task => task.done === false))

    const newTasksOrderedByToDo = tasksToDo.concat(tasksDone)

    setTasks(newTasksOrderedByToDo)
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
          <span className={styles.taskDone}>Concluídas</span> <span className={styles.taskDoneCounter}>{taskDoneCounter} de {taskCreatedCounter}</span>
        </div>
      </div>

      <div className={styles.taskList} ref={listRef}>
        {
          tasks.map(task => {
            return <Task key={task.id} id={task.id} name={task.name} done={task.done} onDeleteTask={handleDeleteTask} onTaskDone={handleTaskDone}  />
          })
        }
      </div>

    </div>
  )
}