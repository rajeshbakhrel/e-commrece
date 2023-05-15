import React from 'react'
import "../Style/SingleCard.css"
// import image1 from "../Assects/laptop.webp"
import { NavLink } from 'react-router-dom'


const SingleCart = (currElem) => {

  const{id, price, name,image, category}= currElem;

  return (
    <NavLink to={`/SingleProduct/${id}`} className='single-product-full-container'>
    <div >
      <div className="single-product-image-title">
         <img src={image} alt={name}  className="single-product-image"/>
         <span>{category}</span>

      </div>

      <div className="single-product-price-name">
        <div className="product-name">{name}</div>
        <div className="product-price">$ {price}</div>

      </div>


    </div>

    </NavLink>
  )
}

export default SingleCart