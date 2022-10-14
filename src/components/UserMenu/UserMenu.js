import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import styles from "../../components/UserMenu/UserMenu.module.css";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <div className={styles.usermenu}>
      <p className={styles.usermenu__text}>Welcome, {user.name}</p>
      <button
        className={styles.usermenu__btn}
         type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}




