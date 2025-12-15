import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

const Card1_map = () => {

    const card1Detailes = [
        {
            img : '/Card1_img1.jpeg',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$600',
            price2 : '$500'
        },
        {
            img : 'Card1_img2.jpeg',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$750',
            price2 : '$400'
        },
        {
            img : '/Card1_img3.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$400',
            price2 : '$250'
        },
        {
            img : '/Card1_img4.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$420',
            price2 : '$350'
        },
        {
            img : '/Card1_img5.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$600',
            price2 : '$450'
        },
        {
            img : '/Card1_img6.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$730',
            price2 : '$420'
        },
        {
            img : '/Card1_img7.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$820',
            price2 : '$500'
        },
        {
            img : '/Card1_img8.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$650',
            price2 : '$450'
        },
        {
            img : '/Card1_img9.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$440',
            price2 : '$200'
        },
        {
            img : '/Card1_img10.png',
            detailes : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iusto!',
            price : '$330',
            price2 : '$200'
        }
    ]

    const card2Detailes = [
        {
            img2 : '/Card2_img1.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img2.jpeg',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img3.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img4.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img5.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img6.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img7.jpeg',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img8.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img9.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
        {
            img2 : '/Card2_img10.png',
            detailes2 : 'Lorem ipsum dolor sit amet'
        },
    ]


  return (


    <div className="main_container">
      <div className="container">
        <div className="bg_img">
          <img src="/Card1_bg.gif" alt="Background" />
        </div>
        <h4>Products</h4>

        <div className="card_slider">

            {card1Detailes.map((value,index) => (
            
            <Card1 key={index}
            img = {value.img}
            detailes = {value.detailes}
            price = {value.price}
            price2 = {value.price2}
            
            />

        ))}

        </div>

        <div className="card2_element">
            <h4>Shops</h4>
            <button>Show more</button>
        </div>
        <div className="card2_slider">
            {card2Detailes.map((value,index) => (
                <Card2 key={index}
                img2 = {value.img2}
                detailes2 = {value.detailes2}
                
                />
            ))}
        </div>
   

        </div>
        
    </div>
  )
}

export default Card1_map