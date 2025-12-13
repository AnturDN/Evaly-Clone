import React from 'react'
import './Card5.css'

const Card5 = ({img5, detailes5}) => {
  return (
        <div className='card5'>

        <div className="card5_img">
            <img src={img5} alt="" />
        </div>

        <div className="detailes5">
            <span className='cod'>COD</span><br/>
            <span className='delivery'>Delivery in 1-5 days</span> <br/>
            <span>{detailes5}</span>
            <div className="stars5">

                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(11.2k)</span>

            </div>
        </div>
        
    </div>
  )
}

export default Card5