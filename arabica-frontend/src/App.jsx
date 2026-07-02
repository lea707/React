import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Navbar from './components/navbar'
import Newpost from './pages/newpost'
import About from './pages/About'
import {UserContext} from './context/UserContext'
import { useState } from 'react'
function App() {
    const [user, setUser] = useState({ name: 'Lea', role: 'admin' })
    return (
        <UserContext.Provider value ={{user,setUser}}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/newpost" element={<Newpost />} />
            </Routes>
        </UserContext.Provider>
    )
}

export default App