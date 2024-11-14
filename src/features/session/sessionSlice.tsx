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

export const signUp = sessionSlice.actions.signUp;
export const editUser = sessionSlice.actions.editUser;
export const logOut = sessionSlice.actions.logOut;

export const selectCurrentUser = (state: RootState): User => state.session.user;
export const selectIsLoggedIn = (state: RootState): boolean => state.session.isLoggedIn;

export default sessionSlice.reducer;