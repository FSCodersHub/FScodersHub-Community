import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo_dark from '../assets/logo-dark.png';
const Footer = () => {
  return (
    <footer className="bg-[#010401] text-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl font-bold mb-8">
          Let’s Create, Collaborate, and Innovate Together
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Community Section */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400" aria-label="About Us">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Join the Community">
                  Join the Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Our Mission">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Meet the Team">
                  Meet the Team
                </a>
              </li>
            </ul>
          </section>

          {/* Resources Section */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Case Studies">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Learning Resources">
                  Learning Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="FAQ">
                  FAQ
                </a>
              </li>
            </ul>
          </section>

          {/* Services Section */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Freelance Services">
                  Freelance Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Hire a Freelancer">
                  Hire a Freelancer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Project Showcase">
                  Project Showcase
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400" aria-label="Request a Quote">
                  Request a Quote
                </a>
              </li>
            </ul>
          </section>

          {/* Connect Section */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/groups/13096592/"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  className="hover:text-green-400 flex items-center"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FSCodersHub/FScodersHub-Community"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  className="hover:text-green-400 flex items-center"
                  aria-label="GitHub"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  className="hover:text-green-400 flex items-center"
                  aria-label="Instagram"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="text-green-400 font-bold text-lg">
            <img
              src={logo_dark}
              alt="Logo"
              className="w-32 object-cover h-24"
            />
          </div>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/groups/13096592/"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="hover:text-green-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin  size={25}/>
            </a>
            <a
              href="https://github.com/FSCodersHub/FScodersHub-Community"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="hover:text-green-400"
              aria-label="GitHub"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="hover:text-green-400"
              aria-label="Instagram"
            >
              <FaInstagram  size={25}/>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;