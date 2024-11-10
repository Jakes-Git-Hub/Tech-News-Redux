import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES } from '../../app/data';
import { RootState } from '../../app/store';

interface CategoryState {
  categories: typeof CATEGORIES;
}

const initialState: CategoryState = {
  categories: CATEGORIES,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
});

export const selectCategories = (state: RootState) => state.categories.categories;
export default categoriesSlice.reducer;