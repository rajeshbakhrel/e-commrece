import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductCustom } from "../Context/ProductContex";
import "../Style/SingleProduct.css";

import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { GiStorkDelivery } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import OurImage from "../Components/OurImage";
import StarContent from "../Components/StarContent";
import loading from "../Assects/loading.gif";
import AddtoCart from "../Components/AddtoCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getsingleProduct, isSingleLoading, singleProduct } =
    useProductCustom();

  const {
    id: alice,
    name,
    company,
    price,
    description,
    category,
    stars,
    stock,
    reviews,
    image,
  } = singleProduct;

  const { id } = useParams();

  useEffect(() => {
    getsingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="is-loading-single-product">
        <img src={loading} alt="loading" />
      </div>
    );
  }

  return (
    <div className="full-single-product-container">
      <div className="image-portion-single-product">
        <OurImage imgs={image} />
      </div>

      <div className="content-portion-single-product">
        <div className="single-product-name">
          <p>{name}</p>
        </div>

        <div className="single-product-rating">
          <p>
            <StarContent star={stars} /> <span>{reviews} reviews</span>
          </p>
        </div>

        <div className="single-product-mrp">
          <p>
            MRP: <del>${price + 21000}</del>
          </p>
        </div>
        <div className="single-product-deal">
          <p>Deal ot the day: ${price}</p>
        </div>
        <div className="single-product-description">
          <p>{description}</p>
        </div>
        <div className="single-product-icon-container">
          <div className="single-product-icon">
            <TbTruckDelivery className="single-icon" />
            <p>Free Delivery</p>
          </div>

          <div className="single-product-icon">
            <TbReplaceFilled className="single-icon" />
            <p>1 Week Replacement</p>
          </div>

          <div className="single-product-icon">
            <GiStorkDelivery className="single-icon" />
            <p>Our Delivery</p>
          </div>

          <div className="single-product-icon">
            <MdSecurity className="single-icon" />
            <p>1 Years Warranty</p>
          </div>
        </div>
        <div className="single-product-available">
          <p>
            Available:
            <span> {stock > 0 ? "Is Available" : "Not Available"}</span>{" "}
          </p>
        </div>
        <div className="single-product-brand">
          <p>
            Brand: <span>{company}</span>{" "}
          </p>
        </div>

        <hr />

        <div className="addtocart-single-product">
          <p> {stock > 0 && <AddtoCart product={singleProduct} />}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
