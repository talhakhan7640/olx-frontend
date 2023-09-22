import React from 'react'
import '../assets/styles/Navbar.css'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const user = useSelector((state) => state.authenticatedUser.value)
  const cookies = new Cookies()
  const navigate = useNavigate()
  const logOutUser = (e) => {
    e.preventDefault()
    cookies.remove("TOKEN", {path: "/"});
    navigate('/crumpled/users/login')
  }
  return (
    <div className="navbar container mx-auto">
      <div className="flex justify-around">
        <div className="logo md:w-1/6 text-center my-auto text-lg">
          Crumpled 🚀
        </div>
        <div className="search-bar hidden md:contents md:w-4/6 text-center my-4 md:my-0">
          <input
            type="search"
            name=""
            id=""
            className="search-input  px-4 text-base text-black"
            placeholder="Search products"
          />
        </div>
        <div className="logout-button md:w-1/6 text-center my-auto text-lg">
          <span className='authUser mx-4'>{user}</span>
          <button onClick={logOutUser}>Logout</button>
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