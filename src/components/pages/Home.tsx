import { Button } from "../atoms/button";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <nav>
        <NavLink to="/register" end>
          <Button>register</Button>
        </NavLink>
        <NavLink to="/login" end>
          <Button>Login</Button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Home;
