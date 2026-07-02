import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Home() {
     const { setUser } = useContext(UserContext)
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => setUser({ name: 'Sara', role: 'viewer' })}>
            Switch to Viewer
            </button>
            <button onClick={() => setUser({ name: 'Lea', role: 'admin' })}>
            Switch to Admin
             </button>
        </div>
    )
}

export default Home