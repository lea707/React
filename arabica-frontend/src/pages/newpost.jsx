import { useState } from 'react'

function Newpost() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [createSuccess, setCreateSuccess] = useState(null)
    function handleSubmit(e) {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body })
        })
        .then(res => res.json())
        .then(data => {
            setCreateSuccess(data)
            setTitle('')
            setBody('')
        })
        .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
            <button type="submit">Submit</button>
            {createSuccess && <p>Post created: {createSuccess.title}</p>}
            
        </form>
    )
}

export default Newpost