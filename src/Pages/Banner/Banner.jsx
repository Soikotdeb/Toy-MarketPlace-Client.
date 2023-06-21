import React from "react";

const Banner = () => {
  return (
    <div className="mt-2">
      <div className="carousel"style={{ height: "700px" }}>
      <div id="item1" className="carousel-item w-full ">
          <img
            src="https://img.freepik.com/free-vector/yellow-sports-car_1308-96215.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=ais"
            className="w-full"
            
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/cartoon-bumper-car-white-background_1308-107382.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=ais"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/red-racing-car_1308-41588.jpg?size=626&ext=jpg&ga=GA1.1.2087522418.1672577037&semt=ais"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/3d-render-f1-racing-car_1048-5611.jpg?size=626&ext=jpg&ga=GA1.1.2087522418.1672577037&semt=ais"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
