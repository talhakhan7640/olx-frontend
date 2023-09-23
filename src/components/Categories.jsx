import React from 'react'
import '../assets/styles/Categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories-container py-4'>
        <div className="flex justify-around">
            {/* <span>Home</span> */}
            <span>
              <Link to="/crumpled/categories/tvs" className="">
                TVs
                  </Link>
            </span>
            <span>
              Laptops & Computers</span>
            <span>

              <Link to="/crumpled/categories/beds" className="">
                Beds
                  </Link>

            </span>
            <span>Sofas</span>
            <span>Dining</span>
            <span>Washing Machine</span>
            <span>Cars</span>
            <span>Bikes</span>
            <span>
              <Link to="/crumpled/categories/motorcycles" className="">
                Motorcycles
                  </Link>
            </span>
            <span>Sports Equipments</span>
            <span>
              <Link to="/crumpled/categories/mobiles" className="">
                Mobiles
                  </Link>
            </span>
        </div>
        <div className='divider my-3'></div>
    </div>
  )
}

export default Categories