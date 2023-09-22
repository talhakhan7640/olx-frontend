import React from 'react'
import '../assets/styles/Categories.css'

const Categories = () => {
  return (
    <div className='categories-container py-4'>
        <div className="flex justify-around">
            {/* <span>Home</span> */}
            <span>Tvs</span>
            <span>Laptops & Computers</span>
            <span>Beds</span>
            <span>Sofas</span>
            <span>Dining</span>
            <span>Washing Machine</span>
            <span>Cars</span>
            <span>Bikes</span>
            <span>Motorcycles</span>
            <span>Sports Equipments</span>
            <span>Mobiles</span>
        </div>
        <div className='divider my-3'></div>
    </div>
  )
}

export default Categories