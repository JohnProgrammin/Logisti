import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Development',
      description: 'Custom web applications and software solutions tailored to your business needs.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      description: 'Creating intuitive and engaging user experiences with beautiful interfaces.',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Graphic Designer',
      description: 'Visual communication concepts that connect with your target audience.',
      icon: '✏️'
    },
    {
      id: 4,
      title: 'Motion Graphic',
      description: 'Bringing stories to life through captivating animation and visual effects.',
      icon: '🎬'
    },
    {
      id: 5,
      title: 'Photography',
      description: 'Professional photography services for products, events, and portraits.',
      icon: '📸'
    },
    {
      id: 6,
      title: 'Videography',
      description: 'High-quality video production for commercials, events, and social media.',
      icon: '🎥'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
        <Navbar />
      <div className="max-w-7xl mx-auto mt-20">
        {/* Top section with tag, heading and description */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-black text-[#00ff73] ring-[1.5px] ring-[#00ff73] rounded-full text-sm font-medium mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore what services <br /> we're offering
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everyone of us loves something different. So explore the world through the lens of our visual capabilities, and find what you love.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#0a0a0ab2] ring-2 ring-gray-500 rounded-2xl p-8 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:bg-[#00ff73] hover:ring-0 relative overflow-hidden group"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-black">{service.title}</h3>
              
              {/* Description */}
              <p className="text-gray-400 mb-8 flex-grow group-hover:text-black">{service.description}</p>
              
              {/* Hover arrow */}
              <div className="absolute bottom-[-2em] left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="w-20 h-20 bg-black hover:bg-[#00ff73] rounded-full flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white hover:text-black " 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;