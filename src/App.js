import React from "react";
// import Login from './components/Login.jsx';
import "./assets/styles/Home.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Categories from "./components/Categories";

function App({ children }) {
  return (
    <div className="App">
      <div className="navbar-container py-4">
        <Navbar />
      </div>

      <div className="sidebar-and-items-container  container mx-auto">
        <div className="grid grid-cols-9 mx-2 lg:mx-12">
          <div className="sidebar-conatainer col-span-2 lg:col-span-2 xl:col-span-2">
            <Sidebar />
          </div>
          <div className="items-container col-span-7 lg:col-span-7  xl:col-span-7">
            <div className="categories-container">
              <Categories />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
