import Link from "next/link";
export default async function ArticleDetail({ params }) {
  const { id } = await params;
  const json = await fetch(
    `http://localhost:1337/api/articles/${id}?populate=img`,
  ).then((res) => res.json());
  const article = json.data;
  return (
    <div>
      <h1>{article.Title}</h1>
      <p>Author: {article.Author}</p>
      <p>Published: {article.PublishedDate}</p>
      <p>{article.Content[0].children[0].text}</p>
      {article.img && (
        <img
          src={`http://localhost:1337${article.img.url}`}
          alt={article.Title}
        />
      )}
      <Link className="btn btn-ghost" href="/">
        Back
      </Link>
    </div>
  );
}
