import styles from './Header.module.css'

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.elements}>
        <img src={logo} alt="" />
        <div>
          <span className={styles.blue}>to</span><span className={styles.purpleDark}>do</span>
        </div>
      </div>
    </div>
  )
}