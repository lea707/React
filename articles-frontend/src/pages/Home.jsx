import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:1337/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.Title}</h2>
          <p>Author: {article.Author}</p>
          <p>Published: {article.PublishedDate}</p>
          <button
            onClick={() => navigate(`/ArticleDetails/${article.documentId}`)}
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}
export default Home;
