import React from 'react'

const Navbar = () => {
  return (
    //Added the navbar
   <div className='page_container'>
     <div className="pages">
            <ul>
                <li><a class="fa-solid fa-house"></a><a href="/">Home</a></li>
                <li><a class="fa-solid fa-store"></a><a href="/store">Store</a></li>
                <li><a class="fa-solid fa-table-list"></a><a href="/categories">Categories</a></li>
            </ul>
        </div>
   </div>
  )
}

export default Navbar