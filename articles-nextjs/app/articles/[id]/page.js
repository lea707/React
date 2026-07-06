import Link from "next/link";

export default async function ArticleDetail({ params }) {
  const { id } = await params;
  const json = await fetch(
    `http://localhost:1337/api/articles/${id}?populate=img`,
  ).then((res) => res.json());
  const article = json.data;

  return (
    <div className="article-detail">
      <h1>{article.Title}</h1>
      <div className="meta">
        By {article.Author} · {article.PublishedDate}
      </div>
      {article.img && (
        <img
          src={`http://localhost:1337${article.img.url}`}
          alt={article.Title}
        />
      )}
      <p className="content">{article.Content[0].children[0].text}</p>
      <Link className="back-link" href="/">
        ← Back
      </Link>
    </div>
  );
}
