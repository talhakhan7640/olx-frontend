import React, { useState } from "react";
import "../assets/styles/Sell.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const navigate = useNavigate();
    
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [productCost, setProductCost] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [msg, setMsg] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [productsImagesUrl, setProductImagesUrl] = useState([]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  // Uploading images on firebase bucket and downloading the url for earch image.
  const user = useSelector((state) => state.authenticatedUser.value);
  const userRef = ref(storage, user);
  // Upload file function
  const uploadFileOnCloudStorage = () => {
    productImages.map((value) => {
      const imageRef = ref(userRef, value.name);
      uploadBytes(imageRef, value.name)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");
        })
        .then(() => {
          // Download file url function
          getDownloadURL(imageRef).then((url) => setProductImagesUrl(url));
          console.log(productsImagesUrl);
        });
    });
    // downloadFilesUrl();
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


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission (e.g., send data to backend)
    console.log({
      productName,
      productDescription,
      productImages,
      productCost,
      productCategory,
    });
    uploadFileOnCloudStorage();
    

    const url = "https://olx-api-k7zv.onrender.com/products/sell-product";
     const response = await fetch(url, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
      },
       body: JSON.stringify({
         productName: productName,
         productDescription: productDescription,
         productPrice: productCost,
         productCategory: productCategory,
        productImages: productsImagesUrl, 
       }),
     });

     response.json().then((data) => {
       console.log(data);
       setStatusCode(response.status)
       setMsg(data.message)
      if(response.status == 201){
        navigate("/crumpled/home");
      }
     })
  };

  return (
    <div className="sell-item-container">
      <form onSubmit={handleSubmit}>
        {msg ? (
          <div
            className={
              statusCode === 201
                ? "bg-green-300 alert_msg py-2 px-3 my-6 rounded-lg text-sm"
                : "bg-red-300 alert_msg py-2 px-3 my-6 rounded-lg text-sm"
            }
          >
            {msg}
          </div>
        ) : (
          <div> </div>
        )}
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
        {/* <button className="sell-button my-6" type="submit">
          Submit
        </button> */}
        <div className="my-6">
          <div>
            <button
              className="sell-item-button text-sm"
              onClick={handleSubmit}
            >
              Sell Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sell;
