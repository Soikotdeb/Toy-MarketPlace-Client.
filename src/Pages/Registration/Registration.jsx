
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
import useTitle from '../../Hooks/UseTitle';

const Registration = () => {
  useTitle('Registration')
    const {createUser}=useContext(AuthContext)
  const auth = getAuth(app)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Password validation
    if (password.length < 8) {
      setError('Password should be at least 8 characters long');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError('Password should contain at least one uppercase letter');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError('Password should contain at least one lowercase letter');
      return;
    }

    if (!/\d/.test(password)) {
      setError('Password should contain at least one digit');
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setError('Password should contain at least one special character (!@#$%^&*)');
      return;
    }

    console.log(email, password, photo, name);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        console.log('Updated profile successfully');
        setSuccess(true);
        setError('');
        form.reset();
        setTimeout(() => {
          setSuccess(false);
        }, 3000); // Hide success message after 3 seconds
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  
    return (
        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f2f2f2',
      }}
    >
      <form
        style={{
          width: 600,
          padding: 40,
          backgroundColor: '#fff',
          borderRadius: 4,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onSubmit={handleRegister}
      >
       <h2 className='font-bold text-3xl text-center'> Please Register </h2>
        <div style={{ marginBottom: 20 }}>
  <label>Name</label>
  <input
  required
    type="text"
    name="Name" // Updated name attribute to lowercase 'name'
    placeholder="Enter your name"
    style={{
      width: '100%',
      padding: 10,
      marginTop: 5,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: 4,
    }}
  />
</div>

        <div style={{ marginBottom: 20 }}>
          <label>Email</label>
          <input
          required
            type="email"
            name="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: 10,
              marginTop: 5,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: 4,
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label>Password</label>
          <input
          required
            type="password"
            name="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: 10,
              marginTop: 5,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: 4,
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label>Photo URL</label>
          <input
          required
            type="text"
            name="photo"
            placeholder="Enter your photo URL"
            style={{
              width: '100%',
              padding: 10,
              marginTop: 5,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: 4,
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Register
        </button>
        <p className='font-bold mt-2'>Already  Have An Account ? <Link  to="/login" className='text-orange-600'>Please LogIn</Link></p>
        <div className='text-orange-600 mt-3'>
        {error && <p>{error}</p>}
        </div>
        <div className='text-orange-300'>
        {success && <p>Account created successfully!</p>}
        </div>
      </form>

    </div>
  );
};

export default Registration;