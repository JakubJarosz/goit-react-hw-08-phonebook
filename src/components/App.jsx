import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./Restricted";
import { refreshUser } from "redux/auth/operations";
import { fetchContacts } from "redux/tasks/operations";
import { useAuth } from "hooks/useAuth";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Tasks } from "../pages/Tasks";

import CircularProgress from '@mui/material/CircularProgress';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing} = useAuth();
  const token = window.localStorage.getItem('token')
 
  useEffect(() => {
    dispatch(refreshUser());
    console.log(token)
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(fetchContacts())
 })

  return isRefreshing ? (
    <CircularProgress color="secondary" />
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<Register/>} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<Login />} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<Tasks />} />
            }
          />
        </Route>
    </Routes>
  );
};
