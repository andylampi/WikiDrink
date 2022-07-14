import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import DrinkDates from "../../containers/DrinksDates";
import Footer from "../Footer/Footer";
import Drink from "./Drink";
import Error from "./Error";
import SearchPart from "./SearchPart";

const Home = () => {
  const [drinks, setDrinks] = useState(DrinkDates);
  const [error, setError] = useState(false);
  const input = useRef(null);
  const getDrink = () => {
    setError(false)
    if (input.current.value == "") {
      return setDrinks(DrinkDates);
    }
    const newDrink = DrinkDates.filter(
      (value) => value.title == input.current.value.toUpperCase()
    );
    if (newDrink.length != 0) {
      return setDrinks(newDrink);
    } else {
      setDrinks([])
      return setError(true);
    }
  };
  return (
    <div className="principal">
      <div className="central_image">
        <div className="dark_filter">
          <div className="container_description">
            <h2>WIKI DRINK</h2>
            <h4>Tutti i cocktail del mondo a portata di click</h4>
            <div>
              <p>
                Wiki Drink è un database internazionale che mette a tue
                disposizione, in maniera <span id="free">Gratuita</span>, le
                ricette più importanti e diffusi cocktail
                <br /> al mondo.
              </p>
            </div>
            <button className="button_explain">
              <Link to="/about" className="link_explain">
                scopri di più
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="main_part">
        <SearchPart input={input} getValue={getDrink} />
        <div className="drinks">
          {error && <Error />}
          {drinks.map((value) => {
            return <Drink {...value} key={value.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
