import Header from './components/Header'
import Footer from './components/Footer'
import UserForm from './components/UserForm'
import UserTable from './components/UserTable'

export default function Layout() {
    return (
        <div className='layout'>
            <Header />
            <div className='content'>
                <img src="https://users-and-chill.netlify.app/1.png" alt="fox" class="pic" />
                <div className='forms'>
                    <UserForm />
                    <UserTable />
                </div>
            </div>
            <Footer />
        </div>
    )
}
