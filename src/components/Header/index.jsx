import styles from './style.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <p>
   Users
   <div className={styles.icon}>
   <i class="fa-solid fa-user-secret">
   </i>
   </div>
        </p>
    </div>
  )
}
