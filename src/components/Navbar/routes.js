import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";

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
];

export default routes;