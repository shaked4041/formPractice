import Header from './components/Header'
import Footer from './components/Footer'
import UserTable from './components/UserTable'
import { useState } from 'react';
import FormInput from './components/FormInput';

export default function Layout() {

       const [inputText, setinputText] = useState({});

    const [users, setUsers] = useState([
        { fname: 'Alice', lname: 'Smith', email: 'alice@example.com' },
        { fname: 'Bob', lname: 'Jones', email: 'bob@example.com' },
        { fname: 'Charlie', lname: 'Brown', email: 'charlie@example.com' }
      ]
      );

    return (
        <div className='layout'>
            <Header />
            <div className='content'>
                <img src="https://users-and-chill.netlify.app/1.png" alt="fox" className="pic" />
                <div className='forms'>
                    <FormInput setinputText={setinputText} setUsers={setUsers} inputText={inputText}/>
                    <UserTable users={users} inputText={inputText}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
