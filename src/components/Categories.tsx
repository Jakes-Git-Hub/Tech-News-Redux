import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Link, Outlet } from 'react-router-dom';

interface CategoriesState {
  [key: string]: any;
}

export default function Categories () {
  const categories: CategoriesState = useSelector(selectCategories)

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        { Object.keys(categories).map(slug => (
          <li key={slug}>
            <Link to={`${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </main>
  )
}
