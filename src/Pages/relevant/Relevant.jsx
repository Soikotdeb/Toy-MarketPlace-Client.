import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Relevant = () => {
  const plans = [
    {
      name: 'Basic',
      price: '9.99',
      features: ['Plastic Body', 'Single Speed', 'LED Headlights'],
      mostPopular: false,
    },
    {
      name: 'Pro',
      price: '19.99',
      features: ['Metal Body', 'Dual Speed', 'LED Headlights', 'Bluetooth Connectivity'],
      mostPopular: true,
    },
    {
      name: 'Premium',
      price: '29.99',
      features: ['Metal Body', 'Dual Speed', 'LED Headlights', 'Bluetooth Connectivity', 'Remote Control'],
      mostPopular: false,
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (index) => {
    setSelectedCard(index);

    // Perform additional actions here for the clicked card

    // Show SweetAlert
    Swal.fire({
      title: 'Processing...',
      text: 'Please wait while we process your request.',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    // Simulate processing time (replace with your actual processing logic)
    setTimeout(() => {
      // Close SweetAlert
      Swal.close();

      // Perform any actions after processing is complete

      // Reset selected card
      setSelectedCard(null);

      // Show success message
      Swal.fire({
        title: 'Success!',
        text: 'Your request has been processed successfully.',
        icon: 'success',
        showConfirmButton: true,
      });
    }, 2000); // Simulate a 2-second processing time
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4" data-aos="fade-down">Choose Your Toy Purchase Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md ${
                plan.mostPopular ? 'border-4 border-blue-500' : ''
              }`}
              data-aos="fade-up"
            >
              {plan.mostPopular && (
                <div className="bg-blue-500 text-white text-center font-semibold uppercase text-xs py-1 px-2 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-2xl mb-4">${plan.price}</div>
              <ul className="text-sm mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full uppercase text-xs font-semibold ${
                  selectedCard === index ? 'animate-bounce' : ''
                }`}
                onClick={() => handleClick(index)}
              >
                {selectedCard === index ? 'Processing' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Relevant;
