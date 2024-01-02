

import { useState } from 'react'
import styles from './style.module.css'

export default function FormInput({ setUsers }) {
   const storedUser = localStorage.user;

   // const initialState = localStorage.user ? JSON.parse(localStorage.user) :{ fname: '', lname: '', email: '', password: '' };
   const initialState = storedUser ? (isValidJSON(storedUser) ? JSON.parse(storedUser) : { fname: '', lname: '', email: '', password: '' }) : { fname: '', lname: '', email: '', password: '' };

   const [formState, setFormState] = useState(initialState)
   const [errorForm, setErrorForm] = useState({ fname: '', lname: '', email: '', password: '' })

   function isValidJSON(str) {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    }
   const handleSubmit = (event) => {
      event.preventDefault();
      setUsers(prevUsers => [
         ...prevUsers,
         {
            fname: formState.fname,
            lname: formState.lname,
            email: formState.email
         }
      ]);
      setFormState({ fname: '', lname: '', email: '', password: '' });
      localStorage.user = initialState
   };
   

   const handleChange = (event) => {
      const { name, value } = event.target

      setFormState(old => {
         const newData = { ...old, [name]: value }
         localStorage.user = JSON.stringify({ ...newData, password: '' })
         return newData
      })



      setErrorForm(old => ({ ...old, [name]: '' }))

      if (name === 'fname' && value.length < 3) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter your first name' }))
      }

      if (name === 'lname' && value.length < 3) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter your last name' }))
      }

      if (name === 'email' && value.length < 10) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter a valid email' }))
      }

      if (name === 'password' && value.length < 10) {
         setErrorForm(old => ({ ...old, [name]: 'Password should contain at least one uppercase, one lowercase, and one digit, and be 6 to 15 characters long' }))
      }

   }

   return (
          <div className={styles.FormInput}>

      <form className={styles.form} onSubmit={handleSubmit} >

         <p className={styles.add}>Add new user</p>
         <div className={styles.line}></div>

         <div className={styles.singleInput}>
            <label>First Name</label>
            <input onChange={handleChange} value={formState.fname} type="name" name='fname' />
            {errorForm.fname && <div className={styles.error}>{errorForm.fname}</div>}
         </div>

         <div className={styles.singleInput}>
            <label>Last Name</label>
            <input onChange={handleChange} value={formState.lname} type="name" name='lname' />
            {errorForm.lname && <div className={styles.error}>{errorForm.lname}</div>}
         </div>

         <div className={styles.singleInput}>
            <label>Email</label>
            <input onChange={handleChange} value={formState.email} type="email" name='email' />
            {errorForm.email && <div className={styles.error}>{errorForm.email}</div>}
         </div>

         {/* <div className={`${styles.error} ${errorForm.name ? styles.vis : ''}`}>{errorForm.name} */}


         <div className={styles.singleInput}>
            <label>Password</label>
            <input onChange={handleChange} value={formState.password} type="password" name='password' />
            {errorForm.password && <div className={styles.error}>{errorForm.password}</div>}
         </div>

         <button type='submit'>Submit</button>

      </form>
</div>
   )
}

