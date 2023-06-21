import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
const handleLogOut =()=> {
  logOut()
  .then(()=>{})
  .catch(error => console.log(error))
}
  return (
    <div className="mt-1">
      <div>
        <nav className="navbar bg-base-100 flex  flex-wrap">
          <div className="navbar-start mx-4 sm:mx-14 text-xl sm:text-3xl flex items-center">
            <img
              src="https://img.freepik.com/free-icon/reddit_318-219841.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=ais"
              alt="Website Logo"
              className="h-auto max-h-10"
            />
            <h1 className="font-bold">
              <span className="text-orange-600">Toy</span> Zone
            </h1>
          </div>
          <div className="navbar-center text-white sm:flex flex-wrap flex-grow-0">
            <Link
              to="/"
              className="btn font-bold text-white btn-ghost normal-case text-xl sm:text-base"
            >
              Home
            </Link>
           {user&& <Link
              to="/myToys"
              className="btn font-bold text-white btn-ghost normal-case text-xl sm:text-base"
            >
              My Toys
            </Link>}
            
            <Link
              to="/allToys"
              className="btn font-bold text-white btn-ghost normal-case text-xl sm:text-base"
            >
              All Toys
            </Link>
            { user&&<Link
              to="/addToys"
              className="btn font-bold text-white btn-ghost normal-case text-xl sm:text-base"
            >
              Add A Toy
            </Link>}
            <Link
              to="/blog"
              className="btn font-bold text-white btn-ghost normal-case text-xl sm:text-base"
            >
              Blogs
            </Link>
            {user ? (
              <Link onClick={handleLogOut}
                to="/"
                className="btn btn-primary font-bold  me-4 normal-case text-xl sm:text-base"
              >
                LogOut
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn font-bold text-orange-600 normal-case text-xl sm:text-base"
              >
                Login
              </Link>
            )}
       
          </div>
         { user&& <div className="avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
       <img title={user?.displayName} src={user?.photoURL} alt="" />
        </div>
       </div>}
        </nav>
       
      </div>
    </div>
  );
};

export default Navbar;

