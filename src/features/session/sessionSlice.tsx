import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface User {
  [key: string]: any;
}

interface SessionState {
  user: User;
  isLoggedIn: boolean;
}

const initialState: SessionState = {
  user: {},
  isLoggedIn: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    editUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const selectCurrentUser = (state: RootState): User => state.session.user;
export const selectIsLoggedIn = (state: RootState): boolean => state.session.isLoggedIn;
export const { signUp, logOut, editUser } = sessionSlice.actions;
export default sessionSlice.reducer;