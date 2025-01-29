import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-medium text-gray-500">Get in Touch</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Me</h1>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center border-2 border-gray-300 rounded-lg p-6 bg-white shadow-md space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-black" />
            <span className="text-gray-800 font-medium">harisivam203@gmail.com</span>
          </div>

          {/* Divider (for small screens hidden) */}
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <Linkedin className="w-6 h-6 text-black" />
            <span className="text-gray-800 font-medium">LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
