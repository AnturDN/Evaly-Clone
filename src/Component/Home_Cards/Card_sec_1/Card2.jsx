import React from 'react'
import './Card2.css'

const Card2 = ({img2, detailes2}) => {
  return (
    <div className='card2'>

        <div className="card2_img">
            <img src={img2} alt="" />
        </div>

        <div className="detailes">
            <span>{detailes2}</span>
        </div>
        
    </div>
  )
}

export default Card2