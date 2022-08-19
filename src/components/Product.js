import React from "react";
import "./Product.css";

const Product = (props) => {
  const myStyle = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className="product-container">
      <div className="product" style={myStyle}></div>

      <div className="section-inner">
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default Product;
