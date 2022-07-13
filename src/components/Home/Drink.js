import React from "react";
import {Link} from "react-router-dom"
const Drink = ({ image, title, id }) => {
  return (
    <article className="drink">
      <img src={image} alt={title}></img>
      <div className="info">
        <h6 className="title_drink">{title}</h6>
        <Link to={`/cocktail/${id}`} components={[1,2,4]} className="ric">
          <h6 className="ric_drink">Ricetta</h6>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            className="icon "
            height="1.3em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
          </Link>
        </div>
    </article>
  );
};

export default Drink;
