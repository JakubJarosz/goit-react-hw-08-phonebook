import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from "redux/auth/operations";

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
      <div>
          <form onSubmit={handleSubmit}> 
              <label>
                  Email
                  <input type="email" name="email"/>
              </label>
              <label>
                  Password
                  <input type="password" name="password"/>
              </label>
              <button type="submit">Log In</button>
          </form>
    </div>
  )
}




