

import React, { useState } from 'react'
import styles from './style.module.css'
import UserTable from '../UserTable'

export default function FormInput() {
   const initialState = localStorage.user ? JSON.parse(localStorage.user) : { name: '', password: '' }
   const [formState, setFormState] = useState(initialState)
   const [errorForm, setErrorForm] = useState({ fname: '', lname: '', email: '', password: '' })
   const [inputText, setinputText] = useState({});

   const handleSubmit = (event) => {
      event.preventDefault()
      setinputText(localStorage.getItem('user'))

   }
             <UserTable inputText={inputText}/>



   // const [users, setUsers] = useState([
   //    { fname: 'Alice', lname: 'Smith', email: 'alice@example.com' },
   //    { fname: 'Bob', lname: 'Jones', email: 'bob@example.com' },
   //    { fname: 'Charlie', lname: 'Brown', email: 'charlie@example.com' }
   //  ]);
  
   //  const addUser = () => {
   //      setUsers(prevUsers => [
   //        ...prevUsers,
   //        { fname: inputText, lname: 'Doe', email: `${inputText.toLowerCase()}@example.com` }
   //      ]);
   //    };

   const handleChange = (event) => {
      const { name, value } = event.target

      setFormState(old => {
         const newData = { ...old, [name]: value }
         localStorage.user = JSON.stringify({ ...newData, password: '' })
         return newData
      })

      setErrorForm(old => ({ ...old, [name]: '' }))

      if (name === 'fname' && value.length < 5) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter your first name' }))
      }

      if (name === 'lname' && value.length < 5) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter your last name' }))
      }

      if (name === 'email' && value.length < 15) {
         setErrorForm(old => ({ ...old, [name]: 'Please enter a valid email' }))
      }

      if (name === 'password' && value.length < 15) {
         setErrorForm(old => ({ ...old, [name]: 'Password should contain at least one uppercase, one lowercase, and one digit, and be 6 to 15 characters long' }))
      }

   }
   console.log(localStorage.getItem('user'));

   return (
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

         <button type='submit' onClick={()=>{handleSubmit}}>Submit</button>

      </form>
   )
}

