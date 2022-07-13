import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DrinkDates from "../../containers/DrinksDates";


const Cocktail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { title, image, Ingredienti, Istruzioni } = DrinkDates[id-1];
  return (
    <div className="ric_principal" >
      <div className="back">
        <button  onClick={() => navigate("/")}>
          <svg
            stroke="currentColor"
            fill="#f72585"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="icon"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm224-80.09L208.42 240H358v32H208.42L272 336.09l-22.7 22.54L147.46 256 249.3 153.37z"></path>
          </svg>
        </button>
        <h4>TORNA IN HOME</h4>
      </div>
      <div className="ric_central">
        <img src={image} alt={title}></img>
        <div className="ric_info">
          <h2 style={{ fontSize: "2rem", letterSpacing: "0.08rem" }}>
            {title}
          </h2>
          <div className="type">
            <p>ALCOHOLIC</p>
            <p>COFFEE / TEA</p>
            <p>BEER MUG</p>
          </div>
          <h4>Ingredienti:</h4>
          <ul>
            {Ingredienti.map((value) => {
              return <li key={value.id}>{value}</li>;
            })}
          </ul>
          <h4>Istruzioni:</h4>
          <p>{Istruzioni}</p>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
