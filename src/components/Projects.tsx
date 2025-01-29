import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
// import photo1 from '../image/photo1.png';
const Projects = () => {
  const projects = [
    {
      title: 'Emotion Detection and user Identification',
      description: 'Developed an AI-driven emotion detection and user identification system using facial recognition, with audio output for enhanced accessibility for visually impaired users. 🎧',
      image: '/images/emotion.jpg',
      tags: ['Python', 'MySQL'],
      github: 'https://github.com/harisivams/Vision_Empower',
      demo: 'https://github.com/harisivams/Vision_Empower'
    },
    {
      title: 'E-token management system',
      description: 'The E-Token Management System is a Flutter-based digital queue solution that generates and manages electronic tokens for efficient service appointments. 🚀',
      image: '/images/project2.png',
      tags: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/harisivams/E-Token',
      demo: 'https://github.com/harisivams/E-Token'
    },
    {
      title: 'College Bus Tracking System',
      description: 'The College Bus Tracking System is a Flutter-based application that enables real-time tracking of college buses, ensuring safe and efficient transportation for students. 🚌📍',
      image: '/images/project3.png',
      tags: ['Flutter', 'Dart', 'Firebase','API'],
      github: 'https://github.com/harisivams/Bus_Tracking',
      demo: 'https://github.com/harisivams/Bus_Tracking'
    },
    {
      title: 'Replicating UI Design',
      description: 'Replicating UI designs using Flutter to create visually consistent and responsive user interfaces. 🎨',
      image: '/images/project5.png',
      tags: ['Flutter', 'Dart', 'API'],
      github: 'https://github.com/harisivams/Flutter_task',
      demo: 'https://github.com/harisivams/Flutter_task'
    },
    {
      title: 'Call Log App',
      description: 'Developed a Flutter app to access and display call logs, providing users with detailed call history. 📞',
      image: '/images/project6.png',
      tags: ['Flutter', 'Dart', 'API'],
      github: 'https://github.com/harisivams/call_logs',
      demo: 'https://github.com/harisivams/call_logs'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, image, tags, github, demo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center space-x-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
