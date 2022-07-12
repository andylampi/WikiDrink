import { useRoutes } from "react-router-dom";
import routes from "./routes";

const NavBar = () => {
  const element = useRoutes(routes);
  return element;
};

export default NavBar;
