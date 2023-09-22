import React from 'react'
import '../assets/styles/Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-items-container">
        <li className="sidebar-item py-4 px-4">
          <Link to="/crumpled/home" className="">
            Home
                  </Link>
        </li>
        <li className="sidebar-item py-4 px-4">
          <Link to="/crumpled/messages" className="">
            Messages
                  </Link>
        </li>
        <li className="sidebar-item py-4 px-4">
          <Link to="/crumpled/favorite" className="">
            Favorite
                  </Link> </li>
        <li className="sidebar-item py-4 px-4"> <Link to="/crumpled/profile" className="">
           Profile 
                  </Link></li>
        <li className="sidebar-item py-4 px-4">Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar