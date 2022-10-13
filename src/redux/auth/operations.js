import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Utility to add JWT (Jason web token)
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: {name, email, password}
*/
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
          const { data } = await axios.post('/users/signup', credentials);
          // After successful register, remove the token from the HTTP header
          setAuthHeader(data.token);
          return data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

/*
 * POST @ /users/login
 * body: {email, password}
*/
export const logIn = createAsyncThunk(
  'auth/login',
    async (credentials, thunkAPI) => {
        try {
          const { data } = await axios.post('/users/login', credentials);
            // After successful login, add the token to the HTTP header
          setAuthHeader(data.token);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
  }
);

/*
 * POST @ /users/logout
 * hearers: Authorization: Bearer token
*/
export const logOut = createAsyncThunk(
  'auth/logout',
    async ( _, thunkAPI) => {
       try {
         await axios.post('/users/logout');
         // After successful logot, remove the token from the HTTP header
         clearAuthHeader();

       } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
       }
  }
);

/*
 * GET @ /users/current
 * hearers: Authorization: Bearer token
*/
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async ( _, thunkAPI) => {
       //Reading the token from the state via getState()
      const token = JSON.parse(window.localStorage.getItem('token'));
        if (token === null) {
            //If there is no token, exit without performing any request 
          return thunkAPI.rejectWithValue("Unable to fetch user");
          
        } else {
              try {
                // If there is a token, add it to the HTTP header and perform the request
                setAuthHeader(token);
                const { data } = await axios.get('/users/current');
                return data;
              } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
              }
        }
    }
)