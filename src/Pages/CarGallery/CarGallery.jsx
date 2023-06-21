import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

const CarGallery = () => {
  const [gallerys, setgallery] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch("Gallery.json")
      .then((res) => res.json())
      .then((data) => setgallery(data));
  }, []);

  return (
  <div className="bg-gray-200">
      <div className="lg:ml-20 mb-2 py-5">
      <div className="flex mt-4 mb-9 font-bold">
        <h1
          className="text-4xl mx-auto"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Kids sports car Gallery
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-7"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {gallerys.map((gallery) => (
          <div
            key={gallery.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure data-aos="zoom-in" data-aos-duration="1000">
              <img className="rounded" src={gallery.picture} alt="Shoes" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{gallery.name}</h2>
              <p>If a dog chews shoes whose Car does he choose?</p>
              <div className="card-actions flex align-middle  justify-center text-orange-500">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Rating
                    readonly
                    placeholderRating={gallery.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  />
                </div>
              </div>
              <div className="justify-center flex">
                <button >Bye Now</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default CarGallery;

