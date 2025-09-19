import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "TechInnovate Inc.",
      heading: "Exceptional Development Work",
      review: "The development team delivered a flawless e-commerce platform that increased our conversion rates by 45%. Their attention to detail and technical expertise exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CTO at TechInnovate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      company: "DesignStudio Pro",
      heading: "Transformative UI/UX Design",
      review: "Their design approach completely transformed our user experience. The intuitive interface and seamless navigation have received overwhelming positive feedback from our customers.",
      name: "Michael Chen",
      role: "Product Director at DesignStudio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      company: "Global Media Group",
      heading: "Outstanding Video Production",
      review: "The videography team captured our brand story perfectly. The promotional videos have significantly boosted our social media engagement and brand recognition.",
      name: "Emily Rodriguez",
      role: "Marketing Director at Global Media",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      company: "Creative Solutions Ltd.",
      heading: "Remarkable Brand Identity",
      review: "The graphic design team created a stunning visual identity that perfectly represents our company values. The new branding has set us apart from competitors.",
      name: "David Thompson",
      role: "Creative Director at Creative Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-20">
        {/* Top section with tag, heading and description */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-black text-[#00ff73] ring-[1.5px] ring-[#00ff73] rounded-full text-sm font-medium mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            What our clients <br /> say about us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experiences working with our team.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-[#0a0a0ab2] ring-2 ring-gray-500 rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl group h-[400px]">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Text Content - Left Side */}
              <div className="flex-1 pr-0 lg:pr-8 mb-6 lg:mb-0">
                <div className="inline-flex items-center justify-center px-3 py-1 bg-black text-[#00ff73] ring-[1.5px] ring-[#00ff73] rounded-full text-xs font-medium mb-4">
                  {testimonials[currentSlide].company}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-black">
                  {testimonials[currentSlide].heading}
                </h3>
                
                <p className="text-gray-400 mb-6 group-hover:text-black">
                  "{testimonials[currentSlide].review}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-lg font-medium text-white group-hover:text-black">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-black">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-[#00ff73] transition-colors duration-300 mx-auto lg:mx-0">
                  <img 
                    src={testimonials[currentSlide].image} 
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-[#00ff73] p-3 rounded-full hover:bg-[#00ff73] hover:text-black transition-colors duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-[#00ff73] p-3 rounded-full hover:bg-[#00ff73] hover:text-black transition-colors duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#00ff73]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;