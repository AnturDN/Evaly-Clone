import React from 'react'

const Navbar = () => {
  return (
   <div className='page_container'>
     <div className="pages">
            <ul>
                <li><i class="fa-solid fa-house"></i><a href="/">Home</a></li>
                <li><i class="fa-solid fa-store"></i><a href="/store">Store</a></li>
                <li><i class="fa-solid fa-table-list"></i><a href="/categories">Categories</a></li>
            </ul>
        </div>
   </div>
  )
}

export default Navbar