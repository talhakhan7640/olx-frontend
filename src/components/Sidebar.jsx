import React from "react";
import "../assets/styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.authenticatedUser.value);

  const cookies = new Cookies();
  const navigate = useNavigate();
  const logOutUser = (e) => {
    e.preventDefault();
    cookies.remove("TOKEN", { path: "/" });
    navigate("/crumpled/users/login");
  };
  return (
    <div className="sidebar-container">
      <ul className="sidebar-items-container px-2 py-2 lg:px-12">
        <li className="sidebar-item py-2 px-4 mx-1 my- mb-8">
          <span className="authUser text-xl">Welcome {user}</span>
        </li>
        <li className="sidebar-item py-2 px-4 mx-1 my-2">
          <Link to="/crumpled/home" className="text-lg">
            Home
          </Link>
        </li>
        <li className="sidebar-item py-2  px-4 mx-1 my-3">
          <Link to="/crumpled/messages" className="text-lg">
            Messages
          </Link>
        </li>
        <li className="sidebar-item py-2 px-4 mx-1 my-3">
          <Link to="/crumpled/favorite" className="text-lg">
            Favorite
          </Link>{" "}
        </li>
        <li className="sidebar-item py-2 px-4 mx-1 my-3">
          {" "}
          <Link to="/crumpled/profile" className="text-lg">
            Profile
          </Link>
        </li>
        <li className="sidebar-item py-2 px-4 mx-1 my-3">
          <button onClick={logOutUser} className="text-lg">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
