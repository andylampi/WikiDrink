import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Error from "../Error/Error";
import Cocktail from "../Cocktail/Cocktail";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <ContactUs />,
  },
  {
    path: "/cocktail/:id",
    element: <Cocktail />,
    component: []
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;