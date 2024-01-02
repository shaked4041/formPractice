import React from 'react'
import styles from './style.module.css'
import FormInput from '../FormInput'

export default function UserForm() {
  return (
    <div className={styles.userForm}>
      <div>
        <FormInput/>
      </div>
    </div>
  )
}
