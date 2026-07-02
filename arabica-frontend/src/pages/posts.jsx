import { useState} from "react";
import Postinfo from "../components/Postinfo.jsx";
import useFetch from "../hooks/useFetch.jsx";
function Posts(){
    const [search, setSearch] = useState('')
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()) )
    if (loading){ return <div>Loading...</div>}
    if (error){ return <div>Error: {error.message}</div>}
    return(
        <div>
            <input type="text" placeholder="Search by title or body" value={search} onChange={e => setSearch(e.target.value)} />
            {filteredPosts.map(post => (
                <Postinfo key={post.id}  id={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    )
}
export default Posts
