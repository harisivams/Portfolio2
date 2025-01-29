import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Harisivam";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="absolute inset-0">
        <div className="particles" id="tsparticles"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-signature" style={{ fontFamily: "'Dancing Script', cursive" }}>
          {text}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fadeIn">
          Application Developer <br /> <br />
          Building beautiful, functional apps for Android & iOS 
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <SocialLink icon={<Github />} href="https://github.com/harisivams" />
          <SocialLink icon={<Linkedin />} href="https://www.linkedin.com/in/harisivams/" />
          <SocialLink icon={<FaWhatsapp />} href="https://wa.me/+916383276528" />
          {/* <SocialLink icon={<Mail />} href="mailto:harisivam203@gmail.com" /> */}
        </div>
        <a
          href="https://drive.google.com/file/d/1hUWaeVAJQL7Gr-XCVMtH1vmTijSYv5tt/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Resume
          </button>
        </a>
        {/* <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
          View My Work
        </button> */}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mx-auto mt-1"></div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
  >
    {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
  </a>
);

export default Hero;