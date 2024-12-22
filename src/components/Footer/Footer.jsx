import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className=" text-blue-950 text-center py-4 flex flex-col items-center justify-center">
                <div className="flex space-x-4 mt-4 sm:mt-0">
                          <Link to="https://github.com/AishShrestha" className="text-blue-950 hover:text-blue-500 hover:scale-105 transition-transform duration-200" target='_blank'>
                            <FaGithub size={20} />
                          </Link>
                          <Link to="https://www.linkedin.com/in/aishshrestha" className="text-blue-950 hover:text-blue-500 hover:scale-105 transition-transform duration-200" target='_blank'>
                            <FaLinkedin size={20} />
                          </Link>
                          <Link to="mailto:shresthaayush49@gmail.com" className="text-blue-950 hover:text-blue-500 hover:scale-105 transition-transform duration-200" target='_blank'>
                          <MdEmail size={20} /></Link>
                </div>
                 <div>
                            <p className="text-base">
                            &copy; {new Date().getFullYear()} Ayush Shrestha. All rights reserved.
                            </p>
                </div>
         
        </footer>
    );
};

export default Footer;
