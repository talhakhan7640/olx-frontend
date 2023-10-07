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
          <span className="authUser text-lg">Welcome {user}</span>
        </li>
          <Link to="/crumpled/home" className="">
        <li className="sidebar-item py-2 px-4 mx-1 my-2">
            Home
        </li>
          </Link>
          <Link to="/crumpled/messages" className="">
        <li className="sidebar-item py-2  px-4 mx-1 my-3">
            Messages
        </li>
          </Link>
          <Link to="/crumpled/favorite" className="">
        <li className="sidebar-item py-2 px-4 mx-1 my-3">
            Favorite
        </li>
          </Link>{" "}
          <Link to="/crumpled/profile" className="">
        <li className="sidebar-item py-2 px-4 mx-1 my-3">
            Profile
        </li>
          </Link>
          <button onClick={logOutUser} className="">
        <li className="sidebar-item py-2 px-4 mx-1 my-3">
            Logout
        </li>
          </button>
      </ul>
    </div>
  );
};

export default Sidebar;
