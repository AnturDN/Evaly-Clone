import React from 'react'
import Card3 from './Card3'

const Card3_map = () => {

    const card3Detailes = [
        {
            img3 : 'Card3_img1.jpeg',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$600',
            price2 : '$500'
        },
        {
            img3 : 'Card3_img2.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$750',
            price2 : '$400'
        },
        {
            img3 : '/Card3_img3.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$400',
            price2 : '$250'
        },
        {
            img3 : '/Card3_img4.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$420',
            price2 : '$350'
        },
        {
            img3 : '/Card3_img5.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$600',
            price2 : '$450'
        },
        {
            img3 : '/Card3_img6.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$730',
            price2 : '$420'
        },
        {
            img3 : '/Card3_img7.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$820',
            price2 : '$500'
        },
        {
            img3 : '/Card3_img8.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$650',
            price2 : '$450'
        },
        {
            img3 : '/Card1_img9.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$440',
            price2 : '$200'
        },
        {
            img3 : '/Card1_img10.png',
            detailes3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$330',
            price2 : '$200'
        }
    ]



  return (

    <div className="main_container3">
      <div className="container3">
        <h4><i class="fa-solid fa-fire"></i>Trending Now</h4>
        <div className="card3_slider">
          {card3Detailes.map((value, index) => (
            <Card3
              key={index}
              img3={value.img3}
              detailes3={value.detailes3}
              price={value.price}
              price2={value.price2}
            />
          ))}
        </div>
      </div>
    </div>
    
        
    
  )
}

export default Card3_map