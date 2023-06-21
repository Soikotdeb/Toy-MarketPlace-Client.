
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer} from 'react-toastify';
import Swal from "sweetalert2";
import useTitle from "../../Hooks/UseTitle";
import { Link } from "react-router-dom";
import { FaSyncAlt, FaTrash } from "react-icons/fa";

const MyToys = () => {
  useTitle('MyToys');
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `https://assignment-11-server-olive.vercel.app/postToyZone?email=${user?.email}`;
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);



//   handle delete your data
const handleDelete = (toyId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-olive.vercel.app/postToyZone/${toyId}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Delete successful',
                '',
                'success'
              );
              const remaining = myToys.filter(toy => toy._id !== toyId);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  

  

  return (
            <div className="p-3 mt-14 mb-14">
         <ToastContainer />
      <table className="table table-compact w-full custom-table">
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td className="actions-cell">
                <div className="flex justify-around">
                <Link to={`/addToys/${toy._id}`}>
                <button className="btn btn-primary">  <span className="gap-3 me-1"><FaSyncAlt /></span> Update</button>
                </Link>
                 
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-danger"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;





