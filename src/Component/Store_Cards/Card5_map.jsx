import React from "react";
import Card5 from "./Card5";

const Card5_map = () => {
  // All the card detailes
  const card5Detailes = [
    {
      img5: "/Card2_img1.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img2.jpeg",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img3.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img4.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
    {
      img5: "/Card2_img5.png",
      detailes5: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div>
      <div className="main_container5">
        <div className="container5">
          <div className="card5_element">
            <h4>Shops</h4>

            <div className="search">
                 <input type="text" placeholder="shop name" />
                 <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
           
          </div>
          <div className="card5_slider">
            {card5Detailes.map((value, index) => (
              <Card5
                key={index}
                img5={value.img5}
                detailes5={value.detailes5}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5_map;
