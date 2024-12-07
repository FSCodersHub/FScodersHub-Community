import logo_dark from '../assets/logo-dark.png';
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl font-bold mb-8">
          Let’s Create, Collaborate, and Innovate Together
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Community Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Join the Community</a></li>
              <li><a href="#" className="hover:text-green-400">Our Mission</a></li>
              <li><a href="#" className="hover:text-green-400">Meet the Team</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Blog</a></li>
              <li><a href="#" className="hover:text-green-400">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-400">Learning Resources</a></li>
              <li><a href="#" className="hover:text-green-400">FAQ</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Freelance Services</a></li>
              <li><a href="#" className="hover:text-green-400">Hire a Freelancer</a></li>
              <li><a href="#" className="hover:text-green-400">Project Showcase</a></li>
              <li><a href="#" className="hover:text-green-400">Request a Quote</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">GitHub</a></li>
              <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="text-green-400 font-bold text-lg">
            <img src={logo_dark} alt="logo" className="w-48 object-cover h-24" />
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">GitHub</a>
            <a href="#" className="hover:text-green-400">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
