import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { Github, ExternalLink, Info } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group relative h-full flex flex-col"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-dark-200">{project.title}</h3>
        <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center text-sm"
              aria-label="Show project details"
            >
              <Info size={16} className="mr-1" />
              Details
            </button>
            
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github size={16} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-white dark:bg-dark-800 p-6 overflow-auto flex flex-col"
        >
          <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-dark-200">{project.title}</h3>
          <p className="text-dark-600 dark:text-dark-400 mb-4">{project.fullDescription || project.description}</p>
          
          {project.features && (
            <div className="mb-4">
              <h4 className="font-semibold text-dark-800 dark:text-dark-200 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-auto">
            <div className="flex gap-3 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-dark-800 dark:bg-dark-700 text-white rounded-lg transition-all hover:bg-dark-700 dark:hover:bg-dark-600 flex items-center"
                >
                  <Github size={16} className="mr-2" />
                  Voir le code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg transition-all hover:bg-primary-700 flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Démo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;