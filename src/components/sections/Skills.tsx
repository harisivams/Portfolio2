import React from 'react';
import { Code, Database, Globe, Palette, Server, Terminal, Wrench, Layers, Zap, PanelRightClose} from 'lucide-react';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion'; 

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      items: ['Flutter','HTML', 'CSS', 'JavaScript' ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6 text-purple-600" />,
      items: ['Node.js','Dart','RESTful APIs']
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6 text-purple-600" />,
      items: ['MySQL','Firebase']
    },
     {
      category: 'State Management',
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      items: ['Bloc','Provider']
    },
    {
      category: 'Tools',
      icon: <PanelRightClose className="w-6 h-6 text-purple-600" />,
      items: ['Git', 'VS Code', 'Android Studio']
    },
    {
      category: 'Certifications',
      icon: <PanelRightClose className="w-6 h-6 text-purple-600" />,
      items: ['Flutter', 'CCNA', 'TCSion NQT Cognitive - 68%']
    },
   
    // {
    //   category: 'Languages',
    //   icon: <Code className="w-6 h-6 text-purple-600" />,
    //   items: ['JavaScript', 'Python', 'Java', 'Go']
    // }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;