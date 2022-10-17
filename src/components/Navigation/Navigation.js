import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styles from "../../components/Navigation/Navigation.module.css";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
      <div className={styles.navigation}>
        <nav>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <NavLink className={styles.nav__link} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.navigation}>
              {isLoggedIn  && (
                <NavLink className={styles.nav__link}  to="/tasks">
                  Tasks
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    );
};
