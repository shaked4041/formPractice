
import React, { useState } from 'react';
import styles from './style.module.css';

export default function UserTable({inputText}) {

    // const [users, setUsers] = useState(
        let users =[
    { fname: 'Alice', lname: 'Smith', email: 'alice@example.com' },
    { fname: 'Bob', lname: 'Jones', email: 'bob@example.com' },
    { fname: 'Charlie', lname: 'Brown', email: 'charlie@example.com' }
  ]
//   );

//   const addUser = () => {
//       setUsers(prevUsers => [
//         ...prevUsers,
//         { fname: inputText, lname: 'Doe', email: `${inputText.toLowerCase()}@example.com` }
//       ]);
//     };


  function buildTable(data) {
    return data.map((user, index=0) => (
      <tr key={user.id}>
        <td>{index+1}</td>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.email}</td>
      </tr>
    ));
  }



  return (
    <div className={styles.userTable}>
      <div className="chart">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className={styles.myTable}>{buildTable(users)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
