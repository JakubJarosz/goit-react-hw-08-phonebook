import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();


  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
