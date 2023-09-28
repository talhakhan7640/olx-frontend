import React from 'react'
import '../assets/styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const sellItem = () => {
    navigate("crumpled/items/sell-item")
  }
    
  return (
    <div className="navbar container mx-auto">
      <div className="flex justify-around">
        <div className="logo md:w-1/7 text-center my-auto text-xl lg:text-2xl">
          FleaMarket 
        </div>
        <div className="search-bar hidden md:contents md:w-4/7 text-center my-4 md:my-0">
          <input
            type="search"
            name=""
            id=""
            className="search-input  px-4 text-base text-black"
            placeholder="Search products"
          />
        </div>
        <div className="selling-button md:w-1/7 text-center my-auto">
          <button className="nineties-button mx-4" onClick={sellItem}>
            Sell item
          </button>

        </div>
      </div>

      {/* Responsive search bar */}
      <div className="responsive-search-bar contents md:hidden">
        <input
          type="search"
          name=""
          id=""
          className="responsive-search-input rounded-3xl px-4 text-base text-black"
          placeholder="Search products"
        />
      </div>
    </div>
  );
}

export default Navbar
