import { Button } from "../atoms/button";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <nav>
        <NavLink to="/register" end>
          <Button>register</Button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Home;
