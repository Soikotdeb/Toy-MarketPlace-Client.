import React, { useContext} from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import useTitle from "../../Hooks/UseTitle";


const Login = () => {
useTitle('login')
  const auth =getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';



  
  const { SignInUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    SignInUser(email, password)
      .then((result) => {
        const LoggedUser = result.user;
        form.reset()
        navigate(from ,{replace:true})
        alert('login succesfull')
      })
      .catch((error) => {
        console.log( 'error',error.message);
      });
  };


  const handleGoogleSignIn = ()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from ,{replace:true})
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f2f2f2",
      }}
    >
      <form
        style={{
          width: 600,
          padding: 40,
          backgroundColor: "#fff",
          borderRadius: 4,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleLogin}
      >
        <h2 className="font-bold text-3xl text-center"> Please Login </h2>
        <div style={{ marginBottom: 20 }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <div style={{ marginTop: 20 }}>
          <Link
            type="button"
            onClick={handleGoogleSignIn}
            style={{
              width: "100%",
              padding: 10,
              backgroundColor: "#db4a39",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaGoogle style={{ marginRight: 8 }} />
            Sign In with Google
          </Link>
        </div>
        <p className="font-bold mt-2">
          Don,t Have An Account ?{" "}
          <Link to="/register" className="text-orange-600">
            Please Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
