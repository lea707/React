import Link from "next/link";

export default async function Home() {
  const json = await fetch(
    "http://localhost:1337/api/articles?populate=img",
  ).then((res) => res.json());
  const articles = json.data;

  return (
    <div className="container">
      <div className="article-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            {article.img && (
              <img
                src={`http://localhost:1337${article.img.url}`}
                alt={article.Title}
              />
            )}
            <div className="article-card-body">
              <h2>{article.Title}</h2>
              <p>By {article.Author}</p>
              <p>{article.PublishedDate}</p>
              <Link href={`/articles/${article.documentId}`}>Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
