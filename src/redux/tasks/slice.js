import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from "../tasks/operations";

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [deleteContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [deleteContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(el => el.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer