import { NavLink } from 'react-router-dom';
import styles from "../AuthNav/AuthNav.module.css";


export const AuthNav = () => {
    return (
      <div className={styles.authnav}>
        <ul className={styles.authnav__list}>
          <li>
            <NavLink className={styles.authnav__link} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.authnav__link} to="/login">
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    );
}