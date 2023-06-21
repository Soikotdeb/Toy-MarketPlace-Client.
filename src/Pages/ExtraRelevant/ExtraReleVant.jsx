import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaPhone, FaUser } from 'react-icons/fa';

const ExtraRelevant = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out-quart', 
      once: true, 
    });
  }, []);


  return (
    <div
      className="bg-gray-200 py-10"
      data-aos="fade-up" 
    >
      <div className="container mx-auto px-4">
       <div className='flex justify-center'>
       <img
              src="https://img.freepik.com/free-icon/reddit_318-219841.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=ais"
              alt="Website Logo"
              className="h-auto max-h-10"
            />
       <h2 className="text-3xl font-bold text-center mb-8"> <span className='text-orange-600'>Toy </span> Zone  Brand Ambassadors</h2>
       </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQzljHn_7bz91B6pn79i5QfN2Edp-y3Thyg&usqp=CAU"
              alt="Brand Ambassador 1"
            />
            <h3 className="text-lg font-semibold">lambergini</h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="data:image/png;base64,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"
              alt="Brand Ambassador 2"
            />
            <h3 className="text-lg font-semibold">BMW</h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkFmx0WqQ6leQRmgXUhiWt5OX438droluwg&usqp=CAU" 
              alt="Brand Ambassador 3"
            />
            <h3 className="text-lg font-semibold">Michael Johnson</h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gXSf0qtqd97J_mrzXsCZ28XNhiyWdGu7BQ&usqp=CAU" 
              alt="Brand Ambassador 4"
            />
            <h3 className="text-lg font-semibold">Nissan</h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozgaX17jK7trBUQuiie0lyvIHn_INJrAmVA&usqp=CAU" 
              alt="Brand Ambassador 4"
            />
            <h3 className="text-lg font-semibold">Daimler AG</h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ywvPhTEs3t2npuE4SKpl-DxkYcZSWtWwiQ&usqp=CAU" 
              alt="Brand Ambassador 4"
            />
            <h3 className="text-lg font-semibold">Fiat Chrysler Automobiles </h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUkziFrCxBGFwrNOUWViUvROmN-VVGmR0PQ&usqp=CAU" 
              alt="Brand Ambassador 4"
            />
            <h3 className="text-lg font-semibold">Hyundai-Kia Group</h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center hover:shadow-lg hover:border-gray-400 hover:bg-white rounded-lg p-4">
            <img
              className="w-20 h-20 rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZx68wPBZ8deYbR3ymF2yHzmiO5ko3CHFmkQ&usqp=CAU" 
              alt="Brand Ambassador 4"
            />
            <h3 className="text-lg font-semibold">Ford</h3>
            <p className="text-gray-500">Brand Ambassador</p>
            <FaUser className="w-8 h-8 mt-4 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600" />
            <a href="tel:+123456789" className="flex items-center mt-4 text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
        
         
        </div>
      </div>

    </div>
  );
};

export default ExtraRelevant;
