
import { useLoaderData, Link } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";
import "./AllToys.css";
import { useState, useEffect } from "react";



const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useTitle("AllToys");
  const loader = useLoaderData();
console.log(loader);

  const handleSearch = () => {
    fetch(`https://assignment-11-server-olive.vercel.app/searchByToyName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error searching toys:", error);
      });
  };

  useEffect(() => {
    if (loader.length > 0) {
      setIsLoading(false);
    }
  }, [loader]);


  const handleViewDetails = (item) => {
    localStorage.setItem("ViewDetailsData", JSON.stringify(item));
    history.push(`/details/${item._id}`);
  };


  const toysToDisplay = searchText ? searchResults : loader;

  return (
    <div className="p-2">
      <div className="mb-14 mt-5 flex justify-center">
        <input
          type="text"
          id="name"
          className="input-field rounded"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link onClick={handleSearch} className="btn btn-secondary w-20 h-5 mb-5 ms-3">
          Search
        </Link>
      </div>

      <table className="table table-compact w-full custom-table">
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6">
                <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
              </td>
            </tr>
          ) : searchText ? (
            toysToDisplay.length > 0 ? (
              toysToDisplay.map((item) => (
                <tr key={item._id}>
                  <td>{item.sellerName}</td>
                  <td>{item.name}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td className="details-cell">
                    <Link to={`/details/${item._id}`} className="details-link font-bold text-orange-600">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No results found.</td>
              </tr>
            )
          ) : (
            loader.map((item) => (
              <tr key={item._id}>
                <td>{item.sellerName}</td>
                <td>{item.name}</td>
                <td>{item.subCategory}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td className="details-cell">
                  <Link to={`/toy/${item._id}`} className="details-link font-bold text-orange-600">
                  <button onClick={() => handleViewDetails(item)} className="details-link font-bold text-orange-600">
                  View Details
                  </button>
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;


