import Home from "../Home/Home";
// import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Error from "../Error/Error";
import Cocktail from "../Cocktail/Cocktail";
import { lazy, Suspense } from "react";

const About = lazy(() => import("../About/About"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Suspense fallback={<h2>...</h2>}>
      <About />      
    </Suspense>,
  },
  {
    path: "/Contact",
    element: <ContactUs />,
  },
  {
    path: "/cocktail/:id",
    element: <Cocktail />
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;