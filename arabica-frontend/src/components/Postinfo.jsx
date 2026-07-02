import { useState } from "react";

function Postinfo({ id, title, body }) {
  const [deleted, setDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);
  function handleDelete() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch((err) => console.error(err));
  }
  function handleEdit(e) {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, body: newBody }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewTitle(data.title);
        setNewBody(data.body);
        setIsEditing(false);
      });
  }
  if (deleted) return <p>Post deleted</p>;

  if (isEditing) {
    return (
      <form onSubmit={handleEdit}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
  return (
    <div>
      <h2>{title}</h2>
      <p>Post Body: {body}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default Postinfo;
