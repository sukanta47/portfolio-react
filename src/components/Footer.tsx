import React from 'react';
import SocialLinks from './SocialLinks';
import { Heart } from 'lucide-react';
import { folioData } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { navItems, aboutMe } = folioData;
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{aboutMe.name}</h3>
            <p className="text-gray-400 mb-4">
              Lead UI Developer based in {aboutMe.location}, creating elegant solutions for complex problems.
            </p>
            <SocialLinks iconSize={5} className="mt-4" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">{aboutMe.location}</p>
            <p className="text-gray-400">{aboutMe.email}</p>
            <p className="text-gray-400">{aboutMe.phone}</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-1">
            &copy; {currentYear} {aboutMe.name}. All rights reserved. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;