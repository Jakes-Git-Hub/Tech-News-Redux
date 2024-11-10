import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";
import { Link, useSearchParams } from 'react-router-dom';

interface Article {
  slug: string;
  title: string;
  body: string; 
  author: string; 
}

export default function Articles() {
  const articles = useSelector(selectArticles) as { [key: string]: Article };

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');

  const filteredArticles: Article[] = title ? filterArticles(title, articles) : Object.values(articles);

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {filteredArticles.map((article: Article) => (
          <li key={article.slug}>
            <Link to={`${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <Search />
    </main>
  );
}