import React, { useState, useEffect } from "react";

const Home = () => {
  // const cookies  = new Cookies()
  // const [products, setProducts] = useState({
  //   imageUrl: "",
  //   productName: "",
  //   desription: "",
  //   productPrice: "",
  //   productImages: "",
  // })
  const [products, setProducts] = useState();

  useEffect(() => {
    const url = "https://olx-api-k7zv.onrender.com/products/";
    const fetchProducts = async () => {
      const response = await fetch(url);
      const products = response.json();
      return products;
    };

    fetchProducts().then((products) => {
      console.log(products);
      if(products.length !== 0){
      setProducts(products);
      } else {
        setProducts(false)
      }
    });
  }, []);

  if (products) {
    return (
      <div className="home px-10">
        {products.map((products) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{ width: "150px", height: "100px", marginRight: "20px" }}
            >
              <img
                src={products.imageUrl}
                alt="Product"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: "10px" }}>
                <strong className="text-lg">{products.productName}</strong>
              </div>
              <div className="product-description text-sm">
                {products.productDescription}
              </div>
            </div>

            <div className="view-product-button-container">
              <button className="nineties-button text-sm">View Product</button>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>There are no products to show...</div>;
  }
};
// console.log(products[0])

export default Home;
