// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#002b22] text-white py-10 text-center">
      <h2 className="text-2xl mb-8">
        Let's Create, Collaborate, and Innovate Together
      </h2>
      <div className="flex flex-wrap justify-around mb-8">
        {/* Column 1 */}
        <div className="flex flex-col items-center min-w-[150px] mb-6">
          <h3 className="text-lg font-bold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Join the Community</li>
            <li>Our Mission</li>
            <li>Meet the Team</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center min-w-[150px] mb-6">
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Learning Resources</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center min-w-[150px] mb-6">
          <h3 className="text-lg font-bold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Join the Community</li>
            <li>Our Mission</li>
            <li>Meet the Team</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center min-w-[150px] mb-6">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Freelance Services</li>
            <li>Hire a Freelancer</li>
            <li>Project Showcase</li>
            <li>Request a Quote</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mt-8">
        <p className="text-base">FS CoderHub</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
              alt="GitHub Icon"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn Icon"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram Icon"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
