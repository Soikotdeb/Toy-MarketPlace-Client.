
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>Oops! Page Not Found</h1>
      <img src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=ais" alt="404 Error" style={styles.image} />
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.homeButton}>Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '0 auto',
  },
  image: {
    maxWidth: '100%',
    marginBottom: '20px',
  },
  homeButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '3px',
    transition: 'background-color 0.3s ease',
  },
};

export default NotFound;
