import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <SocialLink icon={<Github />} href="https://github.com/harisivams" />
            <SocialLink icon={<Linkedin />} href="https://www.linkedin.com/in/harisivams/" />
            <SocialLink icon={<FaWhatsapp />} href="https://wa.me/+916383276528" />
          </div>

          <p className="text-gray-400 text-center mb-8">
            © {new Date().getFullYear()} Harisivam. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transform hover:scale-110 transition-all duration-300"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
  >
    {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
  </a>
);

export default Footer;
