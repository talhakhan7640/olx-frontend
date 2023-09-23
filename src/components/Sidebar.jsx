import React from 'react'
import '../assets/styles/Sidebar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const Sidebar = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const logOutUser = (e) => {
    e.preventDefault()
    cookies.remove("TOKEN", {path: "/"});
    navigate('/crumpled/users/login')
  }
  return (
    <div className="sidebar-container">
      <ul className="sidebar-items-container py-2 px-12">
        <li className="sidebar-item py-2 px-4 mx-2 my-">
          <Link to="/crumpled/home" className="">
            Home
                  </Link>
        </li>
        <li className="sidebar-item py-2  px-4 mx-2 my-2">
          <Link to="/crumpled/messages" className="">
            Messages
                  </Link>
        </li>
        <li className="sidebar-item py-2 px-4 mx-2 my-2">
          <Link to="/crumpled/favorite" className="">
            Favorite
                  </Link> </li>
        <li className="sidebar-item py-2 px-4 mx-2 my-2"> <Link to="/crumpled/profile" className="">
           Profile 
                  </Link></li>
        <li className="sidebar-item py-2 px-4 mx-2 my-2">
          <button onClick={logOutUser}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar