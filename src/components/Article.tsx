import React from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from '../features/articles/articlesSlice';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface Article {
  slug: string;
  title: string;
  body: string;
  author: string;
}

export default function Article() {
  const articles = useSelector(selectArticles);
  const { title } = useParams<{ title?: string }>();

  const article = title ? articles[title] : undefined;

  return article ? (
    <div className="article-container">
      <h1 className="article-title">{article.title}</h1>
      <p>
        By <Link to={`/authors/${article.author}`}>{article.author}</Link>
      </p>
      <ReactMarkdown>
        {article.body}
      </ReactMarkdown>
    </div>
  ) : (
    <p>No article found with that title...</p>
  );
}
