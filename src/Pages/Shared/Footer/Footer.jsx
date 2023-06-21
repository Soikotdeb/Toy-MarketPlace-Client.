import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='mt-5 text-white font-bold'>
             <footer className="footer p-10" style={{ backgroundColor: "#4a5568" }}>

            <div className="w-28">
            <img src="https://img.freepik.com/free-icon/reddit_318-219841.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=ais" alt="Website Logo" className="h-auto max-h-10" />
            <h4 className='font-bold'><span className='text-orange-600 font-bold'>Toy</span> Zone</h4>
          </div>
          <div>
         <span className="footer-title">Services</span>
         <ul>
          <li><a href="#" className="link link-hover">Kids Racing Car Rentals</a></li>
          <li><a href="#" className="link link-hover">Racing Car Sales</a></li>
           <li><a href="#" className="link link-hover">Car Maintenance and Repairs</a></li>
          <li><a href="#" className="link link-hover">Racing Car Accessories</a></li>
          <li><a href="#" className="link link-hover">Racing Car Driving Lessons</a></li>
         </ul>
        </div>

         <div>
            <span className="footer-title">Address</span>
            <ul className="footer-address">
              <li>123 Main City Dhaka</li>
              <li>Dhaka , Bangladesh</li>
              <li>4244 DhakaCity</li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Contact</span>
            <ul className="footer-contact">
              <li>Email: example@example.com</li>
              <li>Phone: +1 123-456-7890</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
     
      <div className="grid grid-flow-col text-orange-300 gap-4">
        <Link to="https://twitter.com/korla_oi" target="_blank">
          <FaTwitter size={24} />
        </Link>
        <Link to="https://www.facebook.com/korla_oi" target="_blank">
          <FaFacebook size={24} />
        </Link>
        <Link to="https://www.instagram.com/korla_oi" target="_blank">
          <FaInstagram size={24} />
        </Link>
      </div>

        <hr />
      </footer>

      <span className="footer lg:text-3xl mb-5  h-10 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center mx-auto mt-2 grid-flow-col">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p> &copy; 2023 <span className='text-orange-600'>Toy</span> Zone. All rights reserved.</p>
  </div> 
</span>

        </div>
      
    );
};

export default Footer;