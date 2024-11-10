import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectArticles } from '../features/articles/articlesSlice';
import { Link, useParams } from 'react-router-dom';

type Articles = {
  [key: string]: { title: string };
};

type Categories = {
  [key: string]: string[];
};

type Params = {
  name: string;
};

export default function Category() {
  const categories: Categories = useSelector(selectCategories);
  const articles: Articles = useSelector(selectArticles);
  const { name } = useParams<Params>();

  return (
    <div>
      <h2>Articles Related to {name}</h2>
      <ul>
        {name && categories[name]?.map((articleSlug) => (
          <li key={articleSlug}>
            <Link to={`/articles/${articleSlug}`}>{articles[articleSlug]?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
