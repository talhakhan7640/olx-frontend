import React, { useState } from "react";
import "../assets/styles/Sell.css";

const Sell = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [productCost, setProductCost] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductImagesChange = (event) => {
    // Assuming multiple images can be selected
    const files = Array.from(event.target.files);
    setProductImages(files);
  };

  const handleProductCostChange = (event) => {
    setProductCost(event.target.value);
  };

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log({
      productName,
      productDescription,
      productImages,
      productCost,
      productCategory,
    });
  };

  return (
    <div className="sell-item-container">
      <form onSubmit={handleSubmit}>
        <h1 className="text-xl">Sell Your Product</h1>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={handleProductDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="productImages">Product Images:</label>
          <input
            type="file"
            id="productImages"
            multiple
            onChange={handleProductImagesChange}
          />
        </div>
        <div>
          <label htmlFor="productCost">Product Cost:</label>
          <input
            type="number"
            id="productCost"
            value={productCost}
            onChange={handleProductCostChange}
          />
        </div>
        <div>
          <label htmlFor="productCategory">Product Category:</label>
          <select
            id="productCategory"
            value={productCategory}
            onChange={handleProductCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="TVs">TVs</option>
            <option value="Beds">Beds</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <button className="sell-button my-6" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
