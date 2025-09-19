import React from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive online shopping experience with seamless checkout and inventory management.',
      categories: ['Development', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      description: 'Complete visual identity package including logo, color palette, and brand guidelines.',
      categories: ['Graphic Design', 'Branding'],
      image: 'https://images.unsplash.com/photo-1567446537738-74804ee3a9bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Mobile App Interface',
      description: 'User-friendly mobile application with intuitive navigation and engaging interactions.',
      categories: ['UI/UX', 'Development'],
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Product Photography',
      description: 'Professional product shots that highlight features and increase conversion rates.',
      categories: ['Photography', 'E-Commerce'],
      image: 'https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'Marketing Video',
      description: 'Engaging promotional video that tells your brand story and connects with audiences.',
      categories: ['Videography', 'Motion Graphics'],
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Corporate Website',
      description: 'Modern corporate website that establishes credibility and generates leads.',
      categories: ['Development', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-20">
        {/* Top section with tag, heading and description */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-black text-[#00ff73] ring-[1.5px] ring-[#00ff73] rounded-full text-sm font-medium mb-6">
            Project
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Project
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
           Some creative designs created by our agency
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#ffffff1f] backdrop-blur-3xl ring-2 ring-gray-500 rounded-2xl p-8 shadow-md flex flex-col transition-all duration-300 hover:shadow-xl hover:bg-[#00ff73] hover:ring-0 relative overflow-hidden group h-[480px]"
            >
              {/* Image container with hover arrow */}
              <div className="relative overflow-hidden rounded-lg mb-6 flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Small arrow that appears on image hover */}
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <svg 
                    className="w-4 h-4 text-[#00ff73] group-hover:text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((category, index) => (
                    <div 
                      key={index} 
                      className="inline-flex items-center justify-center px-3 py-1 bg-transparent text-[#ffffff] ring-[1.5px] ring-[#ffffff] rounded-full text-xs font-medium group-hover:bg-transparent group-hover:text-black group-hover:ring-black"
                    >
                      {category}
                    </div>
                  ))}
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white mb-2 text-left group-hover:text-black">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-400 text-left flex-grow group-hover:text-black">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;