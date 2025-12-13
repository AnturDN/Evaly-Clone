import React from "react";

const Header = () => {
  return (
    <div>
      <div className="nav">
        <div className="main">
          <div className="logo">
            <h1>evaly</h1>
          </div>
          <div className="search">
            <input type="text" placeholder="searct on evaly" />
            <button>Search</button>
          </div>
          <div className="cart">
            <div className="cart_logo">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="singin">
              <i class="fa-solid fa-user"></i>
              <span>SignIn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
