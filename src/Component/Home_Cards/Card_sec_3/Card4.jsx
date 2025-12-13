import React from 'react'
import './Card4.css'

const Card4 = ({img4, detailes4, price,price2}) => {
  return (
      <div className="cards4">
      <div className="card4_img">
        <img src={img4} alt="" />
      
      </div>
      <div className="card4_detailes">
        <span className='stock'>In Stock</span><br/>
        <span>{detailes4}</span>

        <div className='stars'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
    
        </div>

        <h6><del>{price}</del></h6>
        <h5>{price2}</h5>
      </div>
    </div>
  )
}

export default Card4