import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Blog from "../Pages/Blogs/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import SingleToys from "../Pages/SingleToys/SingleToys";
import Details from "../Pages/AllToys/Details/ToysDetails";
import Update from "../Update/Update";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
        path:'myToys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
        },
        { 
        path:'allToys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('https://assignment-11-server-olive.vercel.app/allProducts')
        },
        {
            path:'addToys',
            element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path:'singleToys',
          element:<PrivateRoute><SingleToys></SingleToys></PrivateRoute>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Registration></Registration>
        },
        {
          path:'toy/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>
        },
        {
          path:'addToys/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`https://assignment-11-server-olive.vercel.app/allProducts/${params.id}`)
        }

      ]
    },
  ]);



  export default router;
