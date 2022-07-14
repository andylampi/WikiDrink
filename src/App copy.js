import Structures from "./components/Navbar/Structures";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { createContext, useContext } from "react";

function App() {
  const list = [
    {to: '/', component: <Home/>, description: 'Home', icon: svg}
    {to: '/about', component: <Home/>, description: 'Home', icon: svg}
    {to: '/contact', component: <Home/>, description: 'Home', icon: svg}
    {to: '/cocktail/:id', component: <Home/>, description: 'Home', icon: svg}
    {to: '/*', component: <Home/>, description: 'Home', icon: svg}
  ];
  const {Navbar, RoutesCfg} = useCustomRoute(list, {navbar: true});
  return (
    <div className="app">
      <Router>
        <Navbar />
        <RoutesCfg />
      </Router>
    </div>
  );
}

export default App;
