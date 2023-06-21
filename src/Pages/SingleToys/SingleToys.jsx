import React, { useEffect, useState } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import './SingleToy.css'
import useTitle from "../../Hooks/UseTitle";

const SingleToys = () => {
  useTitle('SingleToys')
  const [singleToy, setSingleToy] = useState(null);

  useEffect(() => {
    const storedToyData = localStorage.getItem("SingleToys");
    if (storedToyData) {
      const toy = JSON.parse(storedToyData);
      setSingleToy(toy);
    }
  }, []);

  if (!singleToy) {
    return (
      <progress
        className="progress progress-secondary w-56"
        value="40"
        max="100"
      ></progress>
    ); 
  }

  return (
<div className="mt-20 mb-20 flex justify-center">
  <div className="card card-side bg-base-100 shadow-xl h-10- w-100 relative overflow-hidden">
    <figure>
      <img src={singleToy.picture} alt={singleToy.name} />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold">{singleToy.name}</h2>
      <p>{singleToy.description}</p>
      <p>Price: ${singleToy.price}</p>
      <Rating
        className="text-orange-600"
        readonly
        placeholderRating={singleToy.rating}
        emptySymbol={<FaRegStar />}
        placeholderSymbol={<FaStar />}
        fullSymbol={<FaStar />}
      />
      <p className="font-bold">Bio: {singleToy.bio}</p>
    </div>
    <div className="heart-animation absolute top-0 right-0 m-2">
      <FaHeart className="text-orange-600 h-10 w-10 animate-spin" />
    </div>
    <div className="card-overlay absolute inset-0 bg-gray-900 bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
  </div>
</div>

  );
};

export default SingleToys;
