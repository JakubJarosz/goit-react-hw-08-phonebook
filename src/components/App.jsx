import { useEffect, lazy } from "react";
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

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();


  useEffect(() => {
    dispatch(refreshUser());
    
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts())
 }, [])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<Register/>} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<Login />} />
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
