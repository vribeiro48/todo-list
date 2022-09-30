import { CreateTask } from "./components/CreateTask"
import { Header } from "./components/Header"

import styles from './App.module.css'

import './global.css'
import { TaskList } from "./components/TaskList"

export default function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>        
        <TaskList />
      </div>
    </div>
  )
}
