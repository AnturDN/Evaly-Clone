import React from 'react'
import './Card3.css'

const Card3 = ({img3,detailes3,price,price2}) => {
  return (

    <div className="cards3">
      <div className="card3_img">
        <img src={img3} alt="" />
      
      </div>
      <div className="card3_detailes">
        <span>{detailes3}</span>
        <h6><del>{price}</del></h6>
        <h5>{price2}</h5>
      </div>
    </div>
  
  )
}

export default Card3