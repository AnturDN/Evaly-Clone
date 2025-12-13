import React from "react";
import "./Card1.css";

const Card1 = ({ img, detailes, price, price2 }) => {
  return (
    <div className="cards">
      <div className="card_img">
        <img src={img} alt="" />
      
      </div>
      <div className="card_detailes">
        <span>{detailes}</span>
        <h6><del>{price}</del></h6>
        <h5>{price2}</h5>
      </div>
    </div>
  );
};

export default Card1;
