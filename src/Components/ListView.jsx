import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/ListView.css";

const ListView = ({ product }) => {
  return (
    <div className="list-view-container">
      {product.map((currElem) => {
        const { id, price, name, image, description } = currElem;
        return (
          <div className="full-list-view">
            <div className="list-view-image">
              <img src={image} alt={name} />
            </div>
            <div className="list-view-content">
              <h2>{name}</h2>
              <p> ${price}</p>
              <p>{description.slice(0, 98)}</p>
              <NavLink to={`/SingleProduct/${id}`}>
                <button>Read More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
