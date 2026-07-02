import { useState } from 'react'
import Information from '../components/information.jsx'
import useFetch from '../hooks/useFetch.jsx'

function Users() {
    const [search, setSearch] = useState('')
    const {data: info, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')
    const filteredInfo = info.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <input 
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={e => setSearch(e.target.value)}/> 
            {filteredInfo.map(user => (
                <Information
                    key={user.id}
                    name={user.name}
                    email={user.email}
                />
            ))}
        </div>
    )
}

export default Users