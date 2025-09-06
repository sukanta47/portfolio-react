import React from "react";
import SocialLinks from "./SocialLinks";
import { folioData } from "../data";
import { Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { navItems, aboutMe } = folioData;

  return (
    <footer className="bg-gray-900 text-white lg:py-12">
      <div className="container-custom mt-0 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-4">
          <div>
            <h3 className="text-xl font-bold mb-4">{aboutMe.name}</h3>
            <p className="text-gray-400 mb-4">
              Lead UI Developer based in {aboutMe.location}, creating elegant
              solutions for complex problems.
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">{aboutMe.location}</p>
            <a
              href={`mailto:${aboutMe.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition"
            >
              <Mail className="h-4" />
              {aboutMe.email}
            </a>

            <a
              href={`tel:${aboutMe.phone}`}
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition"
            >
              <Phone className="h-4" />
              {aboutMe.phone}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-1">
            &copy; {currentYear} {aboutMe.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
