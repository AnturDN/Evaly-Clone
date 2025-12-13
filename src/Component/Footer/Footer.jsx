import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  

        <div>
              <div className='footer_container'>
            
        <div className="item1">
            <h1>evaly</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid doloribus porro delectus sint hic fugit.</span>


            <div className="follow">
                <h4>Follow Us</h4>
                <div className="social">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="item2">
            <span>Contact Us</span>
            <div className="address">
                <span>House #8, Road # 14,</span>
                <span>Dhanmondi, Dhaka-1209</span>
                <span>Email: antur@evaly.com</span>
            </div>
        </div>


        <div className="item3">
            <span>Let Us Help You</span>

            <div className="condition">
                <span>Your Account</span>
                <span>Your Order</span>
                <span>Terms & Conditions</span>
                <span>Return & Refund Policy</span>
                <span>FAQ</span>
            </div>
        </div>


        <div className="item4">
            <span>Get Evaly App</span>

            <div className="app">
                <button><img src="apple store.png" alt="" /></button>
                <button><img src="google play.png" alt="" /></button>
            </div>
        </div>

       
         
    </div>

        <div className="icon">
            <img src="icon.png" alt="" />
        </div>

    <div className="end">
        <span>© 2025 Antur's Website. All rights reserved</span>
    </div>

    </div>

    
  )
}

export default Footer