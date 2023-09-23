import React from 'react'

const Home = () => {
  // const cookies  = new Cookies()

  const imageUrl = 'https://picsum.photos/200/300';
  const productName = 'Mouse';
  const description = 'Logitech mouse of 12th generation'

  const productsList = [
    {
         imageUrl: 'https://apollo-singapore.akamaized.net/v1/files/6ta1e64gro9g1-IN/image;s=780x0;q=60',
   productName: 'Mouse',
   description: 'Logitech mouse of 12th generation.'
    },
    {
         imageUrl: 'https://apollo-singapore.akamaized.net/v1/files/57biqxaomxec2-IN/image;s=780x0;q=60',
   productName: 'Monitor',
   description: '1 year used LG 24 inch monitor with HDMI port available. The monitor is in good condition.'
    },{
         imageUrl: 'https://apollo-singapore.akamaized.net/v1/files/4zdvu8zbemwz1-IN/image;s=780x0;q=60',
   productName: 'Keyboard',
   description: 'Antsports 60% mechanical keyboard. Used only 4 months.'
    },
  ]
  return (
    <div className="home ">

        {productsList.map((product) => (
          
 <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
   {/* Left section for the image */}
   <div style={{ width: "150px", height: "100px", marginRight: "20px" }}>
     <img
       src={product.imageUrl}
       alt="Product"
       style={{ width: "100%", height: "100%", objectFit: "cover" }}
     />
   </div>

   {/* Middle section for the product name and description */}
   <div style={{ flex: 1 }}>
     <div style={{ marginBottom: "10px" }}>
       <strong>{product.productName}</strong>
     </div>
     <div>{product.description}</div>
   </div>

   {/* Right section for the "View Details" button */}
   <div className='view-product-button-container'>
     <button style={{ padding: "10px 20px" }}>View Product</button>
   </div>
 </div>
        ))}

    </div>
  )
}

export default Home