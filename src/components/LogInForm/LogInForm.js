import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from "redux/auth/operations";
import styles from "../LogInForm/LoginForm.module.css";

export const LogInForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value
        dispatch(logIn({
            email: email,
            password: password,
        }));
        form.reset();
    }
  return (
    <div className={styles.loginform}>
      <form onSubmit={handleSubmit}>
        <label className={styles.loginform__text}>
          Email:
          <input
            className={styles.loginform__input}
            type="email"
            name="email"
          />
              </label>
              <br></br>
        <label className={styles.loginform__text}>
          Password:
          <input
            className={styles.loginform__input}
            type="password"
            name="password"
          />
              </label>
              <br></br>
        <button className={styles.loginform__btn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}




