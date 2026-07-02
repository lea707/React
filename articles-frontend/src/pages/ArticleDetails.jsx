import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:1337/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <div>
      <h2>{article.Title}</h2>
      <p>Author: {article.Author}</p>
      <p>Published: {article.PublishedDate}</p>
      <p>{article.Content[0].children[0].text}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
export default ArticleDetails;
