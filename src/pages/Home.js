
import { useAuth } from '../hooks/useAuth'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export function Home() {
  const { isLoggedIn, user } = useAuth();
  return isLoggedIn ? (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome {user.name}
      </h1>
    </div>
  )  : (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Main page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
