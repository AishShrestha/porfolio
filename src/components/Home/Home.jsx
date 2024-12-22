import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen flex items-center justify-center px-5 mt-32">
      {/* Main Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:w-1/2">
          <div className="mb-6 tracking-wide text-3xl sm:text-4xl leading-relaxed text-blue-950">
            Hello, I'm Ayush, <br />
            <span className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Web Developer</span>
            <br />
            based in Nepal
          </div>

          {/* Button and Icons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/src/documents/Ayush Shrestha.pdf"
              download="Ayush_Shrestha_Resume.pdf"
              className="bg-blue-950 px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 text-white hover:bg-blue-500"
            >
              Resume
            </a>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="https://github.com/AishShrestha" className="text-blue-950 hover:text-blue-500 hover:scale-105 transition-transform duration-200" target='_blank'>
                <FaGithub size={40} />
              </Link>
              <Link to="https://www.linkedin.com/in/aishshrestha" className="text-blue-950 hover:text-blue-500 hover:scale-105 transition-transform duration-200" target='_blank'>
                <FaLinkedin size={40} />
              </Link>
              <Link to="mailto:shresthaayush49@gmail.com" className="text-blue-950 hover:text-blue-500 hover:scale-105 transition-transform duration-200" target='_blank'>
              <MdEmail size={40} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
