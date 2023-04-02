import { createSlice } from '@reduxjs/toolkit';

const usersSlicer = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
    deleteUser(state, { payload }) {
      state.users = state.users.filter(user => user.id !== payload);
    },
    changeStatus(state, { payload }) {
      state.users = state.users.map(user => {
        if (user.id === payload) {
          return {
            ...user,
            status: user.status === 'offline' ? 'online' : 'offline',
          };
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, changeStatus } = usersSlicer.actions;
export const userReducer = usersSlicer.reducer;
