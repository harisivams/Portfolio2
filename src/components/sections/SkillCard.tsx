import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  icon: React.ReactNode;
  items: string[];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, icon, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold ml-4 text-gray-800">{category}</h3>
        </div>
        
        <div className="space-y-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
              className="flex items-center"
            >
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;