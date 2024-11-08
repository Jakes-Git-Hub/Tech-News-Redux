import { createSlice } from '@reduxjs/toolkit';
import { ARTICLES } from '../../app/data';

interface Article {
  slug: string;
  title: string;
  body: string;
  author: string;
}

interface ArticlesState {
  articles: { [key: string]: Article };
}

const initialState: ArticlesState = {
  articles: ARTICLES,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {}
});

export const selectArticles = (state: { articles: ArticlesState }) => state.articles.articles;
export const filterArticles = (query: string, articles: { [key: string]: Article }) => 
  Object.values(articles).filter(article => article.title.toLowerCase().includes(query.toLowerCase()));

export default articlesSlice.reducer;