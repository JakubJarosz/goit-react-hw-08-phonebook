import React from 'react'
import { useDispatch } from "react-redux";
import { register } from 'redux/auth/operations';
import styles from "../RegisterForm/RegisterForm.module.css";


export const RegisterForm = () => {
    const dispatch = useDispatch();

     const handleSubmit = e => {
       e.preventDefault();
       const form = e.currentTarget;
       const name = form.elements.name.value;
       const email = form.elements.email.value;
       const password = form.elements.password.value;
         dispatch(register({
             name: name,
             email: email,
             password: password,
         }));
         form.reset();
    };
    
  return (
    <div className={styles.registerform}>
      <form onSubmit={handleSubmit}>
        <label className={styles.registerform__text}>
          Username:
          <input
            className={styles.registerform__input}
            type="text"
            name="name"
          />
        </label>
        <br></br>
        <label className={styles.registerform__text}>
          Email:
          <input
            className={styles.registerform__input}
            type="email"
            name="email"
          />
        </label>
        <br></br>
        <label className={styles.registerform__text}>
          Password:
          <input
            className={styles.registerform__input}
            type="password"
            name="password"
          />
        </label>
        <br></br>
        <button className={styles.registerform__btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}


