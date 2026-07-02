import Link from "next/link";

export default async function Home() {
  const json = await fetch("http://localhost:1337/api/articles").then((res) =>
    res.json(),
  );
  const articles = json.data;
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.Title}</h2>
          <p>Author: {article.Author}</p>
          <p>Published: {article.PublishedDate}</p>
          <Link
            className="btn btn-ghost"
            href={`/articles/${article.documentId}`}
          >
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
}
