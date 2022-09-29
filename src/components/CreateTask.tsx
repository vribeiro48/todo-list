import styles from './CreateTask.module.css'

import { PlusCircle } from 'phosphor-react'

export function CreateTask() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar <PlusCircle size={16} /></button>
    </div>
  )
}