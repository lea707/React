import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function Navbar(){
    const { user } = useContext(UserContext)
    return (
        <nav>
            welcome {user.name} ({user.role})
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/newpost">New Post</Link>
        </nav>
    )
}
export default Navbar