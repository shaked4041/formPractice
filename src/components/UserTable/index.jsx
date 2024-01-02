
// import  { useState } from 'react';
// import styles from './style.module.css';

// export default function UserTable({users}) {


//   function buildTable(data) {
//     return data.map((user, index=0) => (
//       <tr key={index}>
//         <td>{index+1}</td>
//         <td>{user.fname}</td>
//         <td>{user.lname}</td>
//         <td>{user.email}</td>
//       </tr>
//     ));
//   }



//   return (
//     <div className={styles.userTable}>
//       <div className="chart">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody className={styles.myTable}>{buildTable(users)}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// UserTable.jsx

import React from 'react';
import styles from './style.module.css';
export default function UserTable({ users }) {

function buildTable(data) {
  return data.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
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
          <tbody className={styles.myTable}>{buildTable(users)}</tbody>
        </table>
      </div>
    </div>
  );
}
