import React from 'react';
import hero_img from '../assets/hero_img.jpg'

const Hero = () => {
  return (
    <div className="min-h-screen mt-[50px] flex items-center justify-center px-4 py-12 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Make Your Business <br /><span className="text-[#00ff73]">More Powerful</span> With Us
          </h1>
          <p className="text-lg md:text-l text-white mb-8 max-w-2xl">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex tempore beatae, expedita quod consequatur explicabo qui natus cumque dicta nobis iste perferendis distinctio nostrum atque voluptatem illo sit culpa!
          </p>
          <button className="bg-[#00ff7336] ring-[#00ff73] ring-1 hover:bg-[#00ff73] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">Get Started
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 shadow-xl overflow-hidden rounded-[30px] ">
            <img 
              src= {hero_img}
              alt="Hero illustration" 
              className="w-full h-full object-cover hover:scale-103 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;