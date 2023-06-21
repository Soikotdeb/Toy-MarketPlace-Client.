

import React, { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "./../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopCategory = () => {
  const [shopCategories, setShopCategories] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSinglePage = (toy) => {
    if (user == null) {
      toast.error("You have to log in first to view details");
      navigate("/login");
    } else {
      localStorage.setItem("SingleToys", JSON.stringify(toy));
      navigate("/singleToys");
    }
  };

  useEffect(() => {
    fetch("https://assignment-11-server-olive.vercel.app/shop")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch shop categories");
        }
        return response.json();
      })
      .then((data) => {
        const categories = data[0].categories; // Access the categories array
        setShopCategories(categories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (shopCategories.length === 0) {
    return (
      <progress
        className="progress progress-secondary w-56"
        value="70"
        max="100"
      ></progress>
    );
  }

  return (
    <div className="bg-gray-200 py-10 mt-10">

      <h1 className="text-bold flex text-3xl font-bold mt-14 justify-center text-orange-400">
        Shop by category
      </h1>
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <TabList className="text-orange-700 font-bold lg:ms-52">
          {shopCategories.map((category) => (
            <Tab  key={category.id}>{category.name}</Tab>
          ))}
        </TabList>

        {shopCategories.map((category) => (
          <TabPanel key={category.id}>
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Tabs forceRenderTabPanel defaultIndex={0}>
                <TabList className="lg:ms-52 mb-5 font-bold">
                  {category.subCategories.map((subCategory) => (
                    <Tab key={subCategory.id}>{subCategory.name}</Tab>
                  ))}
                </TabList>
                {category.subCategories.map((subCategory) => (
                  <TabPanel key={subCategory.id}>
                    <p>{subCategory.description}</p>
                    {subCategory.toys.map((toy) => (
                      <div
                      
                        key={toy.id}
                        style={{
                          height: "100%",
                          width: "80%",
                          margin: "0 auto",
                        }}
                        className="card card-side gap-y-16 my-5  mx-3 shadow-xl bg-white p-6 rounded-lg border border-gray-300 mb-4"
                      >
                        <figure>
                          <img
                            src={toy.picture}
                            alt="Movie"
                            style={{ width: "300px", height: "100%" }}
                          />
                        </figure>

                        <div className="card-body">
                          <h2
                            className="card-title text-4xl font-bold text-red-300"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            {toy.name}
                          </h2>

                          <p
                            className="font-bold text-3xl"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                          >
                            ${toy.price}
                          </p>

                          <div data-aos="fade-up" data-aos-duration="1000">
                            <Rating
                              className="text-orange-600"
                              readonly
                              placeholderRating={toy.rating}
                              emptySymbol={<FaRegStar />}
                              placeholderSymbol={<FaStar></FaStar>}
                              fullSymbol={<FaStar></FaStar>}
                            />
                          </div>

                          <div
                            className="card-actions justify-end"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <Link
                              to="/singleToys"
                              onClick={() => handleSinglePage(toy)}
                              className="btn btn-primary"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopCategory;
