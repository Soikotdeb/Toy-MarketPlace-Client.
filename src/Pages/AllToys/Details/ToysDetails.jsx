

import React, { useEffect, useState } from 'react';
import { FaRegStar, FaSmile, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ToysDetails = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("ViewDetailsData");
    console.log(storedData);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setItemData([parsedData]);
    }
  }, []);
  if (!itemData) {
    return (
      <progress
        className="progress progress-secondary w-56"
        value="40"
        max="100"
      ></progress>
    ); 
  }

  return (
    <div className="card mt-14">
      {itemData.map((item) => (
 <div key={item._id} className="mt-20 mb-20 flex  justify-center">
  <div className="card card-side border border-red-500 border-t-4 border-b-2 border-dashed  lg:w-2/3 h-96 bg-base-100 shade-fuow-xl h-10- w-100 relative overflow-hidden">
  <figure>
  <img className="w-96 h-full" src={item.pictureUrl} alt="Album Image Not Found please Provide Right PictureUrl Try Again" /> 
</figure>


    <div className="card-body">
    <h3 className="card-title">  Toy name :{item.name}</h3>
    <p>Seller Name: {item.sellerName}</p>
    <p>Seller Email: {item.sellerEmail}</p>
      <p>Price: {item.price}</p>
      <p>Available Quantity: {item.availableQuantity}</p>
      <p>Detail Description: {item.description}</p>
      <Rating
        className="text-orange-600"
        readonly
        placeholderRating={item.rating}
        emptySymbol={<FaRegStar />}
        placeholderSymbol={<FaStar />}
        fullSymbol={<FaStar />}
      />
    </div>
    <div className="heart-animation absolute top-0 right-0 m-2">
      <FaSmile className="text-orange-600 h-10 w-10 animate-spin" />
    </div>
    <div className="card-overlay absolute inset-0 bg-gray-900 bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
  </div>
</div>
   ))}
 </div>
  );
  
};

export default ToysDetails;
