import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { selectAuthors } from "../features/authors/authorsSlice";

// Define types for the parameters and author data
type AuthorParams = {
  name: string;
};

type Article = string;

type AuthorType = {
  articles: Article[];
};

// Component
const Author: React.FC = () => {
  const { name } = useParams<AuthorParams>();
  const authors = useSelector((state: RootState) => selectAuthors(state));

  const author: AuthorType | undefined = name ? authors[name] : undefined;

  return (
    <main>
      <h1>Articles by {name}</h1>
      <ul>
        {author && author.articles ? (
          author.articles.map((slug) => (
            <li key={slug}>
              <Link to={`/articles/${slug}`}>{slug}</Link>
            </li>
          ))
        ) : (
          <p>No Articles Found...</p>
        )}
      </ul>
    </main>
  );
};

export default Author;