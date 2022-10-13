import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAllContacts',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/contacts")
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contacts, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', contacts );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactsId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactsId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);