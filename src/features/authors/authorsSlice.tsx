import { createSlice } from '@reduxjs/toolkit';
import { AUTHORS } from '../../app/data';

interface Author {
  articles: string[];
}

interface AuthorsState {
  authors: Record<string, Author>;
}

const initialState: AuthorsState = {
  authors: AUTHORS,
};

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {}
});

export const selectAuthors = (state: { authors: AuthorsState }) => state.authors.authors;
export default authorsSlice.reducer;