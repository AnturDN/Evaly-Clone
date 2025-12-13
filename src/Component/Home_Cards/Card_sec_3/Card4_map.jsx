import React from 'react'
import Card4 from './Card4'

const Card4_map = () => {



const card4Detailes = [
        {
            img4 : 'Card3_img1.jpeg',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$600',
            price2 : '$500'
        },
        {
            img4 : 'Card3_img2.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$750',
            price2 : '$400'
        },
        {
            img4 : '/Card3_img3.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$400',
            price2 : '$250'
        },
        {
            img4 : '/Card3_img4.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$420',
            price2 : '$350'
        },
        {
            img4 : '/Card3_img5.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$600',
            price2 : '$450'
        },
        {
            img4 : '/Card3_img6.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$730',
            price2 : '$420'
        },
        {
            img4 : '/Card3_img7.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$820',
            price2 : '$500'
        },
        {
            img4 : '/Card3_img8.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$650',
            price2 : '$450'
        },
        {
            img4 : '/Card1_img9.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$440',
            price2 : '$200'
        },
        {
            img4 : '/Card1_img10.png',
            detailes4 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$330',
            price2 : '$200'
        }
]





  return (
        <div className="main_container4">
      <div className="container4">
        <h4><i class="fa-solid fa-fire"></i>Popular Products</h4>
        <div className="card4_slider">
          {card4Detailes.map((value, index) => (
            <Card4
              key={index}
              img4={value.img4}
              detailes4={value.detailes4}
              price={value.price}
              price2={value.price2}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card4_map